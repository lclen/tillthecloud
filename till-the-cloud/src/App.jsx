import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContentsSection from './components/ContentsSection'
import SceneSection from './components/SceneSection'
import FeatureGridSection from './components/FeatureGridSection'
import DarkSection from './components/DarkSection'
import ContactSection from './components/ContactSection'

const scenes = [
  {
    id: 'cloud-courtyard',
    chinese: '云端世界列车梦乐园',
    english: 'Till the Cloud',
    description: '“向云端世界列车梦乐园”，占地3.5万㎡，外观五彩缤纷的火车车厢里能悠闲喝咖啡。本案串联吴地风光与营地，涵盖多国列车核心区、幻光森林、无动力乐园等区域，集艺术休闲于一体。',
    englishDescription: 'Till the Cloud · Dream Park at Zhonghua Stone Appreciation Garden is located in Xinwu District, Wuxi, with a site area of around 35,000 m² and a total investment of RMB 40 million. Along the lakeshore, a colourful themed train hosts cafés and lifestyle spaces, linking water, greenery and architecture into a continuous experience.',
    caption: 'Lakefront night view of Till the Cloud',
    images: [
      '/images/optimized/向云端1.4跨页手册_页面_03_图像_0001.webp',
      '/images/cloud-direction-transparent.png',
    ],
    layout: 'spread',
    bg: 'white',
  },
  {
    id: 'cloudhouse',
    chinese: '云端小筑',
    english: 'Cloudhouse Pavilion',
    description: '「云端小筑」是向云端的标志性建筑，整体由三座纯净白色的圆顶小屋组成，分别为售票处、咨询处和文创商店。建筑内部通透明亮，阳光透过天窗洒入，在白色墙面上投下柔和的光影。',
    images: [
      '/images/optimized/向云端1.4跨页手册_页面_04_图像_0001.webp',
      '/images/optimized/向云端1.4跨页手册_页面_04_图像_0002.webp',
      '/images/optimized/向云端1.4跨页手册_页面_04_图像_0003.webp',
      '/images/optimized/向云端1.4跨页手册_页面_04_图像_0004.webp',
    ],
    layout: 'cloudhouse',
    bg: 'light',
  },
  {
    id: 'samelang',
    chinese: '天空之境',
    english: 'SAMELANG',
    description: [
      '「天空之境 × SAMELANG」是向云端的礼仪视觉集合——既包含白色建筑前的镜面水池，也有纯净的几何礼堂。两者在光影流转与水面倒影的交织下，营造出圣洁而纯净的空间感。',
      '白色拱廊与镜面水池相映成趣，一步一景，随手出片的天空之境打卡点，适合旅拍、人像摄影。',
    ],
    images: [
      '/images/optimized/向云端1.4跨页手册_页面_05_图像_0001.webp',
      '/images/optimized/向云端1.4跨页手册_页面_05_图像_0002.webp',
      '/images/optimized/向云端1.4跨页手册_页面_05_图像_0003.webp',
      '/images/optimized/向云端1.4跨页手册_页面_05_图像_0004.webp',
    ],
    layout: 'samelang',
    bg: 'white',
  },
  {
    id: 'cloud-play',
    chinese: '云端探乐',
    english: 'Cloud Play',
    description: '「云端探乐」是为亲子家庭打造的探索乐园，集合了多种无动力游乐设施。孩子们可以在自然中奔跑、攀爬、探索，在玩乐中亲近自然、释放天性。',
    images: [
      '/images/optimized/向云端1.4跨页手册_页面_06_图像_0001.webp',
      '/images/optimized/向云端1.4跨页手册_页面_06_图像_0002.webp',
      '/images/optimized/向云端1.4跨页手册_页面_06_图像_0003.webp',
      '/images/optimized/向云端1.4跨页手册_页面_06_图像_0004.webp',
    ],
    layout: 'play',
    bg: 'light',
  },
  {
    id: 'miracle-cabins',
    chinese: '山境木屋',
    english: 'Miracle Cabins',
    description: '「山境木屋」隐于杉林之间，是园区最具野奢气质的住宿单元。每栋木屋都拥有独立的观景露台，清晨被鸟鸣唤醒，夜晚枕着星空入眠，尽享与自然的亲密对话。',
    images: [
      '/images/optimized/向云端1.4跨页手册_页面_07_图像_0001.webp',
      '/images/optimized/向云端1.4跨页手册_页面_07_图像_0002.webp',
    ],
    layout: 'cabins',
    bg: 'white',
  },
  {
    id: 'nono-chapel',
    chinese: '诺诺礼堂',
    english: 'Nono Chapel · Forest Adventure',
    description: '「诺诺礼堂」是一座拥有粉色屋顶的白色小教堂，坐落在树林环抱之中。室内以暖色调花艺装饰，营造出温馨浪漫的氛围，是举办小型婚礼、品牌发布会和艺术沙龙的理想场地。',
    images: [
      '/images/optimized/向云端1.4跨页手册_页面_08_图像_0001.webp',
      '/images/optimized/向云端1.4跨页手册_页面_08_图像_0002.webp',
    ],
    layout: 'chapel',
    bg: 'light',
  },
  {
    id: 'waterfront',
    chinese: '早C晚A·水岸露台',
    english: 'Day Coffee, Night Aperitif',
    description: [
      '白天是一杯手冲咖啡的醒神时刻，夜晚是一杯微醺鸡尾酒的美好时分。依水而建的水岸露台，将欧式穹顶与流动灯带结合，成为园区最具仪式感的社交场。',
      '「早C晚A」水岸露台位于湖畔核心位置，以欧式穹顶与环形水景打造出强烈的场景记忆。白天，这里是游客停留的最大碗池；入夜后，灯光与水景共舞，是园区承接活动与夜间经济的重点场地。',
    ],
    images: ['/images/optimized/向云端1.4跨页手册_页面_09_图像_0001.webp'],
    layout: 'waterfront',
    bg: 'white',
  },
]

const diningItems = [
  {
    title: '火车快咖',
    subtitle: 'Train Cafe',
    image: '/images/optimized/向云端1.4跨页手册_页面_11_图像_0004.webp',
    description: '精选单品咖啡与特调饮品，结合车厢式吧台与大面积车窗视野，满足一日游游客的休闲补给。',
  },
  {
    title: '火车餐厅',
    subtitle: 'Train Bistro',
    image: '/images/optimized/向云端1.4跨页手册_页面_11_图像_0005.webp',
    description: '车厢连通的用餐区域，可灵活切换零点、团餐与定制宴席，承接会议与小型庆功宴。',
  },
  {
    title: '水上运动中心',
    subtitle: 'Water Sports',
    image: '/images/optimized/向云端1.4跨页手册_页面_11_图像_0002.webp',
    description: '以皮划艇、桨板等轻水上运动为核心，串联亲水平台与湖畔景观，形成开阔轻盈的体验点。',
  },
  {
    title: '布鲁农营地',
    subtitle: 'Brook Lawn',
    image: '/images/optimized/向云端1.4跨页手册_页面_11_图像_0003.webp',
    description: '草坪与周边林地形成开放户外会客厅，可用于品牌市集、草地音乐会与企业团建。',
  },
]

const familyItems = [
  {
    title: '孔雀园',
    subtitle: 'Peacock Garden',
    image: '/images/optimized/向云端1.4跨页手册_页面_12_图像_0004.webp',
    description: '半开放式自然栖息地，可近距离观察孔雀与小动物，形成亲子研学与自然课堂场景。',
  },
  {
    title: '冰激凌小屋',
    subtitle: 'Ice Cream',
    image: '/images/optimized/向云端1.4跨页手册_页面_12_图像_0002.webp',
    description: '明快造型与甜品补给结合，提供冰激凌、小食与主题互动，是亲子动线中的高辨识度节点。',
  },
  {
    title: '山坡剧场',
    subtitle: 'Hill Theater',
    image: '/images/optimized/向云端1.4跨页手册_页面_12_图像_0005.webp',
    description: '山坡剧场配合 LED 大屏与舞台，可承接品牌发布、团队年会、露天电影与亲子剧场活动。',
  },
  {
    title: '沙沙堡',
    subtitle: 'Sand Playground',
    image: '/images/optimized/向云端1.4跨页手册_页面_12_图像_0003.webp',
    description: '以沙坑、攀爬与滑道组成开放游乐区，满足低龄儿童释放体能与社交玩耍。',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#f7f5ef]">
      <Navbar />
      <HeroSection />
      <ContentsSection />

      {scenes.map((scene) => (
        <SceneSection key={scene.id} {...scene} />
      ))}

      <FeatureGridSection
        id="features"
        chinese="功能（餐饮&休闲）"
        english="DINING & LEISURE"
        items={diningItems}
        backgroundImage="/images/optimized/向云端1.4跨页手册_页面_10_图像_0001.webp"
        bg="light"
      />

      <FeatureGridSection
        chinese="功能（亲子&活动）"
        english="FAMILY & ACTIVITIES"
        items={familyItems}
        backgroundImage="/images/optimized/向云端1.4跨页手册_页面_12_图像_0001.webp"
        bg="white"
      />

      <DarkSection
        id="group-event"
        chinese="团建定制"
        english="GROUP EVENT"
        description={[
          '从十人小团队到百人大型团建，向云端提供一站式定制化服务。',
          '我们拥有多功能的室内外场地，专业的活动策划团队，以及丰富的餐饮住宿配套。无论是企业年会、团队拓展、客户答谢还是主题派对，都能为您量身打造独一无二的难忘体验。',
        ]}
        detailColumns={[
          '林下草坪、山坡营地、镜面水景、火车餐厅与礼堂空间，可根据人数与活动属性自由组合动静分区，从 50 人内团建到数百人嘉年华都能松弛匹配。',
          '提供活动策划执行、灯光音响、舞台搭建、餐饮茶歇、火锅烧烤 / 围炉 / 茶叙等多样餐饮方案，配套摄影摄像与车辆接驳服务，让主办方拎包入场，专注内容不操心细节。',
          '支持破冰热身、主题闯关、趣味运动会等多种形式，可按企业需求定制打卡路线与互动环节，让团队在轻松氛围中建立真正的连接。',
        ]}
        images={[
          '/images/optimized/向云端1.5(1)_页面_13_图像_0001.webp',
          '/images/optimized/向云端1.5(1)_页面_13_图像_0002.webp',
          '/images/optimized/向云端1.5(1)_页面_13_图像_0005.webp',
          '/images/optimized/向云端1.5(1)_页面_13_图像_0004.webp',
          '/images/optimized/向云端1.5(1)_页面_13_图像_0003.webp',
        ]}
        imagePosition="right"
      />

      <DarkSection
        id="neighborhood"
        chinese="周边文旅配套"
        english="NEIGHBORHOOD CULTURAL CLUSTER"
        description={[
          '周边拥有中华赏石园、梁鸿国家湿地公园、鸿山遗址博物馆等丰富的文旅资源。周末及小长假，可串联周边景点，规划一日游或多日游行程。',
          '从历史文化到自然风光，从亲子游乐到美食体验，全方位满足游客的多元需求，让「向云端」成为探索无锡东部文旅资源的理想起点。',
        ]}
        detailColumns={[
          '周边依托中华赏石园、梁鸿国家湿地公园、鸿山遗址博物馆与梁鸿湿地丽笙酒店等资源，既有石文化展陈与学术沙龙，也涵盖研学考察、亲子路线与露营活动。',
          '可与园区现有的火车乐园、湖畔露台、礼堂空间与营地场景组合成完整行程，满足团队客群从游览打卡到活动落地的复合需求。',
          '为政企团队提供“文旅 + 会务 + 团建”一站式服务生态，从半日体验到两日线路都能灵活编排，提升目的地停留时长与整体承接效率。',
        ]}
        images={[
          '/images/optimized/向云端1.4跨页手册_页面_14_图像_0001.webp',
          '/images/optimized/向云端1.4跨页手册_页面_14_图像_0002.webp',
          '/images/optimized/向云端1.4跨页手册_页面_14_图像_0003.webp',
          '/images/optimized/向云端1.4跨页手册_页面_14_图像_0004.webp',
          '/images/optimized/向云端1.4跨页手册_页面_14_图像_0005.webp',
        ]}
        imagePosition="left"
      />

      <ContactSection />
    </div>
  )
}

export default App
