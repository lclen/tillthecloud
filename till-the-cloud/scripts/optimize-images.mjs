import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDir = path.resolve('original-images');
const publicImagesDir = path.resolve('public/images');
const outputDir = path.join(publicImagesDir, 'optimized');
const maxLongEdge = 2400;
const webpQuality = 88;

async function listImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listImages(fullPath));
      continue;
    }

    if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getOutputPath(filePath) {
  const relativePath = path.relative(sourceDir, filePath);
  const parsedPath = path.parse(relativePath);
  return path.join(outputDir, parsedPath.dir, `${parsedPath.name}.webp`);
}

async function optimizeImage(filePath) {
  const outputPath = getOutputPath(filePath);
  const input = sharp(filePath, { failOn: 'none' }).rotate();
  const metadata = await input.metadata();
  const width = metadata.width ?? 0;
  const height = metadata.height ?? 0;
  const longEdge = Math.max(width, height);
  const resize =
    longEdge > maxLongEdge
      ? { width: width >= height ? maxLongEdge : undefined, height: height > width ? maxLongEdge : undefined }
      : undefined;

  await mkdir(path.dirname(outputPath), { recursive: true });

  await input
    .resize({ ...resize, withoutEnlargement: true })
    .webp({
      quality: webpQuality,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  const sourceSize = (await stat(filePath)).size;
  const outputSize = (await stat(outputPath)).size;

  return {
    file: path.relative(sourceDir, filePath),
    output: path.relative(publicImagesDir, outputPath),
    sourceSize,
    outputSize,
    saved: sourceSize - outputSize,
    width,
    height,
  };
}

function formatMB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

const images = await listImages(sourceDir);
const results = [];

for (const image of images) {
  results.push(await optimizeImage(image));
}

const sourceTotal = results.reduce((sum, item) => sum + item.sourceSize, 0);
const outputTotal = results.reduce((sum, item) => sum + item.outputSize, 0);
const savedTotal = results.reduce((sum, item) => sum + item.saved, 0);

console.table(
  results
    .sort((a, b) => b.sourceSize - a.sourceSize)
    .slice(0, 20)
    .map((item) => ({
      file: item.file,
      original: formatMB(item.sourceSize),
      optimized: formatMB(item.outputSize),
      saved: formatMB(item.saved),
      size: `${item.width}x${item.height}`,
    })),
);

console.log(`Optimized ${results.length} images.`);
console.log(`Original total: ${formatMB(sourceTotal)}`);
console.log(`Optimized total: ${formatMB(outputTotal)}`);
console.log(`Saved: ${formatMB(savedTotal)} (${Math.round((savedTotal / sourceTotal) * 100)}%)`);
