import React from 'react';
import * as motion from 'framer-motion/client';
import avatarFrame from './assets/portfolio/avatar-frame.png';
import avatarPortrait from './assets/portfolio/avatar-portrait.png';
import bt1Img1 from './assets/portfolio/bt1-img.png';
import bt2Img1 from './assets/portfolio/bt2-img.png';
import bt3Img1 from './assets/portfolio/bt3-img.png';
import bt4Img1 from './assets/portfolio/bt4-img.png';
import bt5Img1 from './assets/portfolio/bt5-img.png';
import bt6Img1 from './assets/portfolio/bt6-img.png';
import bt1Pdf from '../docs/Bt1.pdf';
import bt2Pdf from '../docs/Bt2.pdf';
import bt3Pdf from '../docs/Bt3.pdf';
import bt4Pdf from '../docs/Bt4.pdf';
import bt5Pdf from '../docs/Bt5.pdf';
import bt6Pdf from '../docs/Bt6.pdf';
import ProfileModal from './components/ProfileModal.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import { chapters, goals, profile } from './data/portfolioData.js';
import conclutionLeft1 from './assets/portfolio/conclution-left.png';
import conclutionRight1 from './assets/portfolio/conclution-right.png';
import infoCardBg from './assets/portfolio/info-card-bg.png';
import infoCardBg2 from './assets/portfolio/info-card-bg.png';
import './index.css';
import tag1 from './assets/portfolio/wrap-icon-2/wrap2-024-label-bow-left.png';
import tag2 from './assets/portfolio/wrap-icon-2/wrap2-025-label-blue-plaid-heart.png';
import tag3 from './assets/portfolio/wrap-icon-2/wrap2-023-label-grid-flower.png';
import tag4 from './assets/portfolio/wrap-icon-2/wrap2-026-label-cloud-heart.png';
import tag5 from './assets/portfolio/wrap-icon-2/wrap2-024-label-bow-left-medium.png';
import wrap1001BowSheer1 from './assets/portfolio/wrap-icon-1/wrap1-001-bow-sheer.png';
import wrap1016SparkleFourPointLarge1 from './assets/portfolio/wrap-icon-1/wrap1-016-sparkle-four-point-large.png';
import wrap1016SparkleFourPointLarge2 from './assets/portfolio/wrap-icon-1/wrap1-016-sparkle-four-point-large.png';
import wrap1016SparkleFourPointLarge3 from './assets/portfolio/wrap-icon-1/wrap1-016-sparkle-four-point-large.png';
import wrap1016SparkleFourPointLarge4 from './assets/portfolio/wrap-icon-1/wrap1-016-sparkle-four-point-large.png';
import wrap1016SparkleFourPointLarge5 from './assets/portfolio/wrap-icon-1/wrap1-016-sparkle-four-point-large.png';
import wrap1018ButterflyWatercolor1 from './assets/portfolio/wrap-icon-1/wrap1-018-butterfly-watercolor.png';
import wrap1019SparkleCluster1 from './assets/portfolio/wrap-icon-1/wrap1-019-sparkle-cluster.png';
import wrap1021SparkleBurst1 from './assets/portfolio/wrap-icon-1/wrap1-021-sparkle-burst.png';
import wrap1021SparkleBurst2 from './assets/portfolio/wrap-icon-1/wrap1-021-sparkle-burst.png';
import wrap1021SparkleBurst22 from './assets/portfolio/wrap-icon-1/wrap1-021-sparkle-burst.png';
import wrap1021SparkleBurst3 from './assets/portfolio/wrap-icon-1/wrap1-021-sparkle-burst.png';
import wrap1023ButterflyPixel1 from './assets/portfolio/wrap-icon-1/wrap1-023-butterfly-pixel.png';
import wrap1030BlossomFivePetal1 from './assets/portfolio/wrap-icon-1/wrap1-030-blossom-five-petal.png';
import wrap1032CloudBlueHearts1 from './assets/portfolio/wrap-icon-1/wrap1-032-cloud-blue-hearts.png';
import wrap1033Daisy1 from './assets/portfolio/wrap-icon-1/wrap1-033-daisy.png';
import wrap1036StickyGoodVibes1 from './assets/portfolio/wrap-icon-1/wrap1-036-sticky-good-vibes.png';
import wrap1039SpeechOval1 from './assets/portfolio/wrap-icon-1/wrap1-039-speech-oval.png';
import wrap1047StatusBar1 from './assets/portfolio/wrap-icon-1/wrap1-047-status-bar.png';
import wrap1065HeartDoodle1 from './assets/portfolio/wrap-icon-1/wrap1-065-heart-doodle.png';
import wrap1066SwirlPink1 from './assets/portfolio/wrap-icon-1/wrap1-066-swirl-pink.png';
import wrap1068SwirlBlue1 from './assets/portfolio/wrap-icon-1/wrap1-068-swirl-blue.png';
import wrap1069SquigglePink1 from './assets/portfolio/wrap-icon-1/wrap1-069-squiggle-pink.png';
import wrap1079LabelXoxo1 from './assets/portfolio/wrap-icon-1/wrap1-079-label-xoxo.png';
import wrap2005BunnyBow1 from './assets/portfolio/wrap-icon-2/wrap2-005-bunny-bow.png';
import wrap2009ChapterHeart061 from './assets/portfolio/wrap-icon-2/wrap2-009-chapter-heart-06.png';
import wrap2010ChapterHeart021 from './assets/portfolio/wrap-icon-2/wrap2-008-chapter-heart-02.png';
import wrap2010ChapterHeart011 from './assets/portfolio/wrap-icon-2/wrap2-010-chapter-heart-01.png';
import wrap2011ChapterHeart031 from './assets/portfolio/wrap-icon-2/wrap2-011-chapter-heart-03.png';
import wrap2012ChapterHeart041 from './assets/portfolio/wrap-icon-2/wrap2-012-chapter-heart-04.png';
import wrap2013ChapterHeart051 from './assets/portfolio/wrap-icon-2/wrap2-013-chapter-heart-05.png';
import wrap2027SparklePink1 from './assets/portfolio/wrap-icon-2/wrap2-027-sparkle-pink.png';
import wrap2027SparklePink2 from './assets/portfolio/wrap-icon-2/wrap2-027-sparkle-pink.png';
import wrap2030StarBlue1 from './assets/portfolio/wrap-icon-2/wrap2-030-star-blue.png';
import wrap2030StarBlue2 from './assets/portfolio/wrap-icon-2/wrap2-030-star-blue.png';
import wrap2032SpeechHeart1 from './assets/portfolio/wrap-icon-2/wrap2-032-speech-heart.png';
import wrap2033HeartPixel1 from './assets/portfolio/wrap-icon-2/wrap2-033-heart-pixel.png';
import wrap2033HeartPixel12 from './assets/portfolio/wrap-icon-2/wrap2-033-heart-pixel.png';
import wrap2033HeartPixel13 from './assets/portfolio/wrap-icon-2/wrap2-033-heart-pixel.png';
import wrap2034BowSticker1 from './assets/portfolio/wrap-icon-2/wrap2-034-bow-sticker.png';
import wrap2035DividerBlueBow1 from './assets/portfolio/wrap-icon-2/wrap2-035-divider-blue-bow.png';
import wrap2037DividerPinkHeartLine1 from './assets/portfolio/wrap-icon-2/wrap2-037-divider-pink-heart-line.png';
import wrap2039UnderlinePink1 from './assets/portfolio/wrap-icon-2/wrap2-039-underline-pink.png';
import wrap2040UnderlineBlueHeart1 from './assets/portfolio/wrap-icon-2/wrap2-040-underline-blue-heart.png';
import wrap2042FlowerPinkSmall1 from './assets/portfolio/wrap-icon-2/wrap2-042-flower-pink-small.png';
import wrap2042FlowerPinkSmall2 from './assets/portfolio/wrap-icon-2/wrap2-042-flower-pink-small.png';
import wrap2050HeartWing1 from './assets/portfolio/wrap-icon-2/wrap2-050-heart-wing.png';
import wrap2052Cherries1 from './assets/portfolio/wrap-icon-2/wrap2-052-cherries.png';
import wrap2062HeartPixelMedium1 from './assets/portfolio/wrap-icon-2/wrap2-062-heart-pixel-medium.png';
import wrap2063PaperclipBlueHeart1 from './assets/portfolio/wrap-icon-2/wrap2-063-paperclip-blue-heart.png';
import wrap2066LollipopHeart1 from './assets/portfolio/wrap-icon-2/wrap2-066-lollipop-heart.png';
import wrap2067PaperclipPink1 from './assets/portfolio/wrap-icon-2/wrap2-067-paperclip-pink.png';
import wrap2070BowPinkSmall1 from './assets/portfolio/wrap-icon-2/wrap2-070-bow-pink-small.png';
import backgroundFull1 from './assets/portfolio/background-full.png';
import bgBowRibbonLarge from './assets/portfolio/wrap-icon-1/wrap1-002-bow-ribbon-large.png';
import bgBowWavy from './assets/portfolio/wrap-icon-1/wrap1-003-bow-wavy.png';
import bgHeartPuffy from './assets/portfolio/wrap-icon-1/wrap1-011-heart-puffy.png';
import bgHeartIridescent from './assets/portfolio/wrap-icon-1/wrap1-013-heart-iridescent.png';
import bgStarGem from './assets/portfolio/wrap-icon-1/wrap1-009-star-gem.png';
import bgCloudWhite from './assets/portfolio/wrap-icon-1/wrap1-031-cloud-white.png';
import bgCloudGingham from './assets/portfolio/wrap-icon-1/wrap1-034-cloud-gingham.png';
import bgCursorPixel from './assets/portfolio/wrap-icon-1/wrap1-051-cursor-pixel.png';
import bgCursorClickPink from './assets/portfolio/wrap-icon-1/wrap1-055-cursor-click-pink.png';
import bgTapeLove from './assets/portfolio/wrap-icon-1/wrap1-075-label-made-with-love.png';
import bgLabelCutie from './assets/portfolio/wrap-icon-1/wrap1-081-label-cutie.png';
import bgTinyHeart from './assets/portfolio/wrap-icon-1/wrap1-062-tiny-heart.png';
import bgTamagotchiLarge from './assets/portfolio/wrap-icon-2/wrap2-001-tamagotchi-large.png';
import bgCdSweetDays from './assets/portfolio/wrap-icon-2/wrap2-002-cd-sweet-days.png';
import bgNoteToSelf from './assets/portfolio/wrap-icon-2/wrap2-003-note-to-self.png';
import bgHeartMirror from './assets/portfolio/wrap-icon-2/wrap2-004-heart-mirror.png';
import bgBrowserWindowTabs from './assets/portfolio/wrap-icon-2/wrap2-007-browser-window-tabs.png';
import bgPopupSoCute from './assets/portfolio/wrap-icon-2/wrap2-006-popup-so-cute.png';
import bgTapeRainbow from './assets/portfolio/wrap-icon-2/wrap2-049-tape-rainbow.png';
import bgWandStar from './assets/portfolio/wrap-icon-2/wrap2-051-wand-star.png';
import bgBowIridescent from './assets/portfolio/wrap-icon-2/wrap2-053-bow-iridescent.png';
import bgBowBlueSmall from './assets/portfolio/wrap-icon-2/wrap2-071-bow-blue-small.png';
import bgGemHeartPink from './assets/portfolio/wrap-icon-2/wrap2-069-gem-heart-pink.png';
import bgCursorWhite from './assets/portfolio/wrap-icon-2/wrap2-056-cursor-white.png';
import bgFlowerPurple from './assets/portfolio/wrap-icon-2/wrap2-043-flower-purple.png';
import bgSparkleWhite from './assets/portfolio/wrap-icon-2/wrap2-028-sparkle-white.png';
import viewMoreIcon from './assets/portfolio/wrap-icon-1/wrap1-056-washi-grid-scallop.png';

const pageMotion = {
  hidden: { opacity: 0, scale: 0.985, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const layerMotion = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.35, ease: 'easeOut' },
  },
};

const backgroundDecorItems = [
  {
    src: bgTamagotchiLarge,
    className: 'bg-xl bg-left bg-float-slow',
    x: '4vw',
    y: '8vh',
    rotate: '-8deg',
    delay: '-1s',
  },
  {
    src: bgCdSweetDays,
    className: 'bg-xl bg-right bg-drift',
    x: 'calc(100vw - 190px)',
    y: '10vh',
    rotate: '12deg',
    delay: '-2.4s',
  },
  {
    src: bgNoteToSelf,
    className: 'bg-lg bg-left bg-wiggle',
    x: '6vw',
    y: '42vh',
    rotate: '5deg',
    delay: '-0.7s',
  },
  {
    src: bgHeartMirror,
    className: 'bg-lg bg-right bg-float-slow',
    x: 'calc(100vw - 170px)',
    y: '48vh',
    rotate: '-11deg',
    delay: '-3s',
  },
  {
    src: bgBrowserWindowTabs,
    className: 'bg-wide bg-left bg-drift',
    x: '3vw',
    y: '78vh',
    rotate: '-3deg',
    delay: '-1.5s',
  },
  {
    src: bgPopupSoCute,
    className: 'bg-md bg-right bg-wiggle',
    x: 'calc(100vw - 175px)',
    y: '78vh',
    rotate: '9deg',
    delay: '-2s',
  },
  {
    src: bgBowRibbonLarge,
    className: 'bg-md bg-left bg-float-slow',
    x: '16vw',
    y: '5vh',
    rotate: '10deg',
    delay: '-1.8s',
  },
  {
    src: bgBowWavy,
    className: 'bg-sm bg-right bg-wiggle',
    x: '82vw',
    y: '29vh',
    rotate: '-10deg',
    delay: '-0.4s',
  },
  {
    src: bgHeartPuffy,
    className: 'bg-sm bg-left bg-float-slow',
    x: '14vw',
    y: '26vh',
    rotate: '-7deg',
    delay: '-2.2s',
  },
  {
    src: bgHeartIridescent,
    className: 'bg-sm bg-right bg-twinkle',
    x: '89vw',
    y: '63vh',
    rotate: '14deg',
    delay: '-1.2s',
  },
  {
    src: bgStarGem,
    className: 'bg-xs bg-left bg-twinkle',
    x: '9vw',
    y: '62vh',
    rotate: '18deg',
    delay: '-1.9s',
  },
  {
    src: bgCloudWhite,
    className: 'bg-sm bg-right bg-drift',
    x: '74vw',
    y: '5vh',
    rotate: '-2deg',
    delay: '-3.2s',
  },
  {
    src: bgCloudGingham,
    className: 'bg-sm bg-left bg-drift',
    x: '18vw',
    y: '72vh',
    rotate: '6deg',
    delay: '-1.1s',
  },
  {
    src: bgCursorPixel,
    className: 'bg-xs bg-right bg-wiggle',
    x: '77vw',
    y: '40vh',
    rotate: '-14deg',
    delay: '-0.8s',
  },
  {
    src: bgCursorClickPink,
    className: 'bg-xs bg-left bg-wiggle',
    x: '20vw',
    y: '52vh',
    rotate: '8deg',
    delay: '-2.7s',
  },
  {
    src: bgTapeLove,
    className: 'bg-md bg-left bg-drift',
    x: '7vw',
    y: '91vh',
    rotate: '7deg',
    delay: '-3.6s',
  },
  {
    src: bgLabelCutie,
    className: 'bg-sm bg-right bg-float-slow',
    x: '83vw',
    y: '91vh',
    rotate: '-5deg',
    delay: '-1.6s',
  },
  {
    src: bgTinyHeart,
    className: 'bg-tiny bg-left bg-twinkle',
    x: '29vw',
    y: '14vh',
    rotate: '0deg',
    delay: '-0.5s',
  },
  {
    src: bgTapeRainbow,
    className: 'bg-md bg-right bg-drift',
    x: '73vw',
    y: '18vh',
    rotate: '-9deg',
    delay: '-2.6s',
  },
  {
    src: bgWandStar,
    className: 'bg-xs bg-left bg-twinkle',
    x: '25vw',
    y: '86vh',
    rotate: '-12deg',
    delay: '-1.4s',
  },
  {
    src: bgBowIridescent,
    className: 'bg-sm bg-right bg-float-slow',
    x: '80vw',
    y: '70vh',
    rotate: '11deg',
    delay: '-2.1s',
  },
  {
    src: bgBowBlueSmall,
    className: 'bg-xs bg-left bg-wiggle',
    x: '11vw',
    y: '36vh',
    rotate: '-4deg',
    delay: '-3.1s',
  },
  {
    src: bgGemHeartPink,
    className: 'bg-xs bg-right bg-twinkle',
    x: '92vw',
    y: '38vh',
    rotate: '8deg',
    delay: '-0.9s',
  },
  {
    src: bgCursorWhite,
    className: 'bg-xs bg-left bg-wiggle',
    x: '30vw',
    y: '7vh',
    rotate: '16deg',
    delay: '-1.7s',
  },
  {
    src: bgFlowerPurple,
    className: 'bg-xs bg-right bg-float-slow',
    x: '70vw',
    y: '87vh',
    rotate: '-7deg',
    delay: '-2.9s',
  },
  {
    src: bgSparkleWhite,
    className: 'bg-tiny bg-right bg-twinkle',
    x: '68vw',
    y: '31vh',
    rotate: '0deg',
    delay: '-0.2s',
  },
];

const BackgroundDecor = () => (
  <div className="background-decor" aria-hidden="true">
    <div className="background-grid" />
    {backgroundDecorItems.map((item, index) => (
      <img
        key={`${item.src}-${index}`}
        className={`bg-decor-item ${item.className}`}
        alt=""
        src={item.src}
        style={{
          '--x': item.x,
          '--y': item.y,
          '--rotate': item.rotate,
          '--delay': item.delay,
        }}
      />
    ))}
  </div>
);

const projectAssets = [
  {
    cardClassName: 'project-card',
    imageClassName: 'img',
    titleClassName: 'text-wrapper-4',
    image: bt6Img1,
    pdfUrl: bt1Pdf,
  },
  {
    cardClassName: 'project-card-2',
    imageClassName: 'bt-img',
    titleClassName: 'text-wrapper-4',
    image: bt5Img1,
    pdfUrl: bt2Pdf,
  },
  {
    cardClassName: 'project-card-3',
    imageClassName: 'img-2',
    titleClassName: 'text-wrapper-4',
    image: bt3Img1,
    pdfUrl: bt3Pdf,
  },
  {
    cardClassName: 'project-card-4',
    imageClassName: 'img-3',
    titleClassName: 'text-wrapper-11',
    image: bt4Img1,
    pdfUrl: bt4Pdf,
  },
  {
    cardClassName: 'project-card-5',
    imageClassName: 'img-4',
    titleClassName: 'text-wrapper-12',
    image: bt2Img1,
    pdfUrl: bt5Pdf,
  },
  {
    cardClassName: 'project-card-6',
    imageClassName: 'img-5',
    titleClassName: 'text-wrapper-12',
    image: bt1Img1,
    pdfUrl: bt6Pdf,
  },
];

const App = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false);
  const projects = chapters.map((chapter, index) => ({
    ...chapter,
    ...projectAssets[index],
  }));

  return (
    <div className="wrapper">
      <div className="app">
        <BackgroundDecor />
        <motion.div
          className="main-page"
          variants={pageMotion}
          initial="hidden"
          animate="visible"
        >
          <div className="y2k-sparkle-field" aria-hidden="true">
            {Array.from({ length: 28 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="background-layer"></div>
          <motion.div className="content-layer" variants={layerMotion}>
            <div className="contact-section">
              <p className="text-wrapper">
                Cảm ơn thầy cô và cậu đã dành thời gian lật mở những trang nhật
                ký này cùng mình
              </p>
            </div>
            <div className="conclution-section">
              <div className="thanks">
                <img
                  className="conclution-left"
                  alt="Conclution left"
                  src={conclutionLeft1}
                />
                <p className="c-m-n-xem-portfolio">
                  Cảm ơn đã xem
                  <br />
                  portfolio của mình
                </p>
                <p className="p">
                  Portfolio này khép lại như trang cuối của một cuốn tiểu thuyết
                  hay, mang theo cảm xúc và sự trưởng thành. Điểm tâm đắc nhất
                  là đưa được sự nhẹ nhàng, dễ thương vào một dự án môn học khô
                  khan
                </p>
              </div>
              <div className="challenge">
                <img
                  className="conclution-right"
                  alt="Conclution right"
                  src={conclutionRight1}
                />
                <div className="text-wrapper-2">Thách thức</div>
                <p className="text-wrapper-3">
                  Thách thức lớn nhất là AI đôi khi cung cấp điều luật ảo. Cách
                  vượt qua là kiểm chứng chéo với văn bản pháp luật gốc
                </p>
              </div>
            </div>
            <div className="project-section">
              {projects.map((chapter) => (
                <div className={chapter.cardClassName} key={chapter.number}>
                  <div className="project-img-fram">
                    <img
                      className={chapter.imageClassName}
                      alt={`Minh họa ${chapter.cardTitle}`}
                      src={chapter.image}
                    />
                  </div>
                  <div className={chapter.titleClassName}>
                    {chapter.cardTitle}
                  </div>
                  <p className="text-wrapper-5">{chapter.shortText}</p>
                  <button
                    className="text-wrapper-6"
                    type="button"
                    aria-label={`Xem thêm ${chapter.title}`}
                    onClick={() => setSelectedProject(chapter)}
                  >
                    Xem thêm
                  </button>
                </div>
              ))}
            </div>
            <div className="hero-section">
              <div className="info-card">
                <img
                  className="info-card-bg"
                  alt="Info card bg"
                  src={infoCardBg}
                />
                <img
                  className="info-card-bg"
                  alt="Info card bg"
                  src={infoCardBg2}
                />
                <img className="tag" alt="Tag" src={tag5} />
                <img className="tag-2" alt="Tag" src={tag4} />
                <img className="tag-3" alt="Tag" src={tag3} />
                <img className="tag-4" alt="Tag" src={tag2} />
                <img className="tag-5" alt="Tag" src={tag1} />
                <div className="text-wrapper-15">Chuyên gia pháp lý</div>
                <div className="text-wrapper-16">Luật sư</div>
                <div className="text-wrapper-17">Nhẹ nhàng</div>
                <div className="text-wrapper-18">Dễ thương</div>
                <div className="text-wrapper-19">Yêu tiểu thuyết</div>
                <div className="text-wrapper-20 kawaii-shine">Trà My</div>
                <div className="text-wrapper-21">mình là</div>
                <div className="text-wrapper-22">Xin chào,</div>
                <button
                  className="profile-more-button"
                  type="button"
                  aria-label="Xem thêm thông tin cá nhân"
                  onClick={() => setIsProfileModalOpen(true)}
                  style={{
                    backgroundImage: `url(${viewMoreIcon})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                >
                  Xem thêm
                </button>
              </div>
              <div className="avatar-block">
                <img
                  className="avatar-portrait"
                  alt="Avatar portrait"
                  src={avatarPortrait}
                />
                <img
                  className="avatar-frame"
                  alt="Avatar frame"
                  src={avatarFrame}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="floating-layer sticker-float"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.7 }}
          >
            <img
              className="bunny-bow"
              alt="Bunny bow"
              src={wrap2005BunnyBow1}
            />
            <div className="create-your-own">
              Create <br />
              your own magic
            </div>
            <img
              className="swirl-pink"
              alt="Swirl pink"
              src={wrap1066SwirlPink1}
            />
            <img
              className="swirl-blue"
              alt="Swirl blue"
              src={wrap1068SwirlBlue1}
            />
            <img
              className="sparkle"
              alt="Sparkle"
              src={wrap1016SparkleFourPointLarge1}
            />
            <img
              className="wrap-sparkle"
              alt="Sparkle"
              src={wrap1016SparkleFourPointLarge2}
            />
            <img
              className="sparkle-2"
              alt="Sparkle"
              src={wrap1016SparkleFourPointLarge3}
            />
            <img
              className="sparkle-3"
              alt="Sparkle"
              src={wrap1016SparkleFourPointLarge4}
            />
            <img
              className="sparkle-4"
              alt="Sparkle"
              src={wrap1016SparkleFourPointLarge5}
            />
            <img
              className="bow-pink"
              alt="Bow pink"
              src={wrap2070BowPinkSmall1}
            />
            <img
              className="sparkle-5"
              alt="Sparkle"
              src={wrap1021SparkleBurst1}
            />
            <img
              className="sparkle-6"
              alt="Sparkle"
              src={wrap1021SparkleBurst2}
            />
            {/* <img className="sparkle-7" alt="Sparkle" src={image} /> */}
            <img
              className="sparkle-8"
              alt="Sparkle"
              src={wrap1021SparkleBurst22}
            />
            <img
              className="sparkle-9"
              alt="Sparkle"
              src={wrap1021SparkleBurst3}
            />
            <img
              className="cloud-blue"
              alt="Cloud blue"
              src={wrap1032CloudBlueHearts1}
            />
            <img
              className="bow-sheer"
              alt="Bow sheer"
              src={wrap1001BowSheer1}
            />
            <img
              className="sparkle-10"
              alt="Sparkle"
              src={wrap2027SparklePink1}
            />
            <img
              className="star-blue"
              alt="Star blue"
              src={wrap2030StarBlue1}
            />
            <img
              className="heart-wing"
              alt="Heart wing"
              src={wrap2050HeartWing1}
            />
            <img
              className="divider"
              alt="Divider"
              src={wrap2035DividerBlueBow1}
            />
            <img
              className="sparkle-11"
              alt="Sparkle"
              src={wrap1019SparkleCluster1}
            />
            <img
              className="lollipop"
              alt="Lollipop"
              src={wrap2066LollipopHeart1}
            />
            <img
              className="squiggle"
              alt="Squiggle"
              src={wrap1069SquigglePink1}
            />
            <img
              className="wrap-divider"
              alt="Divider"
              src={wrap2037DividerPinkHeartLine1}
            />
            <img
              className="butterfly"
              alt="Butterfly"
              src={wrap1018ButterflyWatercolor1}
            />
            <img
              className="paperclip"
              alt="Paperclip"
              src={wrap2063PaperclipBlueHeart1}
            />
            <img className="heart" alt="Heart" src={wrap2033HeartPixel1} />
            <img
              className="wrap-heart"
              alt="Heart"
              src={wrap2033HeartPixel13}
            />
            <img className="speech" alt="Speech" src={wrap2032SpeechHeart1} />
            <img className="heart-2" alt="Heart" src={wrap2033HeartPixel12} />
            <img
              className="wrap-speech"
              alt="Speech"
              src={wrap1039SpeechOval1}
            />
            <img
              className="blossom"
              alt="Blossom"
              src={wrap1030BlossomFivePetal1}
            />
            <img
              className="label-xoxo"
              alt="Label xoxo"
              src={wrap1079LabelXoxo1}
            />
            <img
              className="sticky"
              alt="Sticky"
              src={wrap1036StickyGoodVibes1}
            />
            <img className="cherries" alt="Cherries" src={wrap2052Cherries1} />
            <img className="daisy" alt="Daisy" src={wrap1033Daisy1} />
            <img
              className="flower"
              alt="Flower"
              src={wrap2042FlowerPinkSmall1}
            />
            <img
              className="wrap-flower"
              alt="Flower"
              src={wrap2042FlowerPinkSmall2}
            />
            <img
              className="underline"
              alt="Underline"
              src={wrap2039UnderlinePink1}
            />
            <img className="bow" alt="Bow" src={wrap2034BowSticker1} />
            <img
              className="status-bar"
              alt="Status bar"
              src={wrap1047StatusBar1}
            />
            <img
              className="wrap-star-blue"
              alt="Star blue"
              src={wrap2030StarBlue2}
            />
            <img
              className="wrap-paperclip"
              alt="Paperclip"
              src={wrap2067PaperclipPink1}
            />
            <img
              className="sparkle-12"
              alt="Sparkle"
              src={wrap2027SparklePink2}
            />
            <img
              className="heart-3"
              alt="Heart"
              src={wrap2062HeartPixelMedium1}
            />
            <img
              className="wrap-butterfly"
              alt="Butterfly"
              src={wrap1023ButterflyPixel1}
            />
            <img
              className="chapter-1"
              alt="Chapter"
              src={wrap2010ChapterHeart011}
            />
            <img
              className="chapter-2"
              alt="Chapter"
              src={wrap2010ChapterHeart021}
            />
            <img
              className="chapter-3"
              alt="Chapter"
              src={wrap2011ChapterHeart031}
            />
            <img
              className="chapter-4"
              alt="Chapter"
              src={wrap2012ChapterHeart041}
            />
            <img
              className="chapter-5"
              alt="Chapter"
              src={wrap2013ChapterHeart051}
            />
            <img
              className="chapter-6"
              alt="Chapter"
              src={wrap2009ChapterHeart061}
            />
            {/* <img className="project-img" alt="Project img" src={project2Img} /> */}
            <img
              className="wrap-underline"
              alt="Underline"
              src={wrap2040UnderlineBlueHeart1}
            />
            <img className="heart-4" alt="Heart" src={wrap1065HeartDoodle1} />
            <div className="text-wrapper-23 kawaii-shine">Tổng kết</div>
            <div className="text-wrapper-24 kawaii-shine">Danh sách dự án</div>
          </motion.div>
        </motion.div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
        <ProfileModal
          isOpen={isProfileModalOpen}
          profile={profile}
          goals={goals}
          onClose={() => setIsProfileModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default App;
