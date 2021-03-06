import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Transition } from '@headlessui/react';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './MainBannerSlide.scss';

import cx from 'classnames';

const Video = ({
  src = '/video/movie-sample.mp4',
  poster = '/video/poster.png',
}) => {
  const [onPlay, setOnPlay] = useState(false);
  const videoRef = useRef();
  const swiper = useSwiper();

  const onClick = () => {
    swiper.autoplay.stop();

    videoRef.current.play();
    videoRef.current.addEventListener('ended', () => {
      setOnPlay(false);
      swiper.autoplay.start();
      swiper.slideNext();
    });
    setOnPlay(true);
  };

  const onPause = () => {
    setOnPlay(false);
    swiper.autoplay.start();
  };

  return (
    <div className="relative h-full">
      <div className="absolute w-full h-full bg-black" />
      <video
        controls
        className="absolute w-full top-1/2 -translate-y-1/2 disabledFullscreen"
        ref={videoRef}
        muted
        src={src}
        onPause={onPause}
        playsInline
      />
      <Transition
        show={!onPlay}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img
          className="absolute object-cover w-full h-full"
          src={poster}
          alt=""
        />
        <div className="absolute w-full h-full bg-black bg-opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-w-[80px] xl:max-w-[150px]">
          <button onClick={onClick}>
            <img src="/img/btn-play-big.svg" alt="" />
          </button>
        </div>
      </Transition>
    </div>
  );
};

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()} className="h-full">
      <img src="/img/slider-arrow.svg" alt="" className="h-full !w-auto" />
    </button>
  );
}
function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()} className="h-full">
      <img src="/img/slider-arrow.svg" alt="" className="h-full !w-auto" />
    </button>
  );
}

const MainBannerSlide = () => {
  const swiper = useSwiper();
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        speed={2500}
        slidesPerView={1}
        spaceBetween={0}
        loop
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        threshold={100}
        pagination={{ type: 'progressbar' }}
        className="mainBannerSlider"
      >
        <SwiperSlide>
          <div className="relative z-20 w-full max-w-[1920px] max-h-[870px] overflow-hidden">
            <div className="pt-[56.25%]" />
            <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
              <div className="container">
                <img
                  src="/img/bts_logo.png"
                  srcSet="/img/bts_logo@2x.png 2x,
                            /img/bts_logo@3x.png 3x"
                  alt="BTS"
                  className="!h-[20px] xl:!h-auto !w-auto opacity-0 #sm:hidden"
                />
                <div className="text-white mt-[26px]">
                  <p
                    className={cx(
                      'text-[18px] sm:text-[22px] font-extrabold font-TmoneyRoundWind px-cpx',
                      'xl:text-[42px]',
                    )}
                  >
                    ?????????????????? [????????? with BTS]??????
                    <br />
                    ????????? ????????? ????????????!
                  </p>
                </div>
                <div className="mt-[12px] sm:mt-[24px] xl:mt-[46px] flex gap-x-[20px] justify-center">
                  <div className="h-[40px] xl:h-auto">
                    <img
                      src="/img/btn-googleplay.png"
                      srcSet="/img/btn-googleplay@2x.png 2x,
                              /img/btn-googleplay@3x.png 3x"
                      className="hidden xl:block !w-auto !h-auto max-h-[40px] xl:max-h-[80px]"
                    />
                  </div>
                  <div className="h-[40px] xl:h-auto">
                    <img
                      src="/img/btn-appstore.png"
                      srcSet="/img/btn-appstore@2x.png 2x,
                                /img/btn-appstore@3x.png 3x"
                      className="!w-auto !h-auto max-h-[40px] xl:max-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute max-w-[1920px] w-full h-full z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/img/img-main@3x.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute w-full h-full overflow-hidden">
            <img
              src="/img/img-main@3x.png"
              alt=""
              className="blur-[50px] scale-110"
            />
            <div className="w-full h-full absolute bg-black top-0 left-0 opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- chrome ???????????? ?????? ?????? ?????? ??? muted ????????? autoplay ???????????? ????????????: https://developer.chrome.com/blog/autoplay/--> */}
          <div className="relative z-20 w-full max-w-[1920px] max-h-[870px] overflow-hidden">
            <div className="pt-[56.25%]" />
            <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
              <div className="w-full h-full absolute bg-black"></div>
              <div className="w-full h-full max-w-[1920px] relative z-20">
                <Video />
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full overflow-hidden">
            <img
              src="/img/img-main@3x.png"
              alt=""
              className="blur-[50px] scale-110"
            />
            <div className="w-full h-full absolute bg-black top-0 left-0 opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-20 w-full max-w-[1920px] max-h-[870px] overflow-hidden">
            <div className="pt-[56.25%]" />
            <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
              <div className="flex justify-center items-center flex-col relative z-10 container">
                <img
                  src="/img/bts_logo.png"
                  alt="BTS"
                  className="#sm:max-h-[80px] !w-auto !h-auto"
                />
                <div className="text-white mt-[8px]">
                  <div className="text-[22px] sm:text-[30px] xl:text-[60px] font-extrabold leading-[1.1]">
                    HEADING ISLAND LIFE
                  </div>
                  <p className="text-[12px] xl:text-[21px]">
                    3DPuzzle Game width BTS character and space decoration
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute max-w-[1920px] w-full h-full z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/img/img-video-thumb.png"
              srcSet="/img/img-video-thumb@2x.png 2x,
                          /img/img-video-thumb@3x.png 3x"
              className="w-full h-full"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-30" />
            <img
              src="/img/img-pattern.png"
              srcSet="/img/img-pattern@2x.png 2x,
                          /img/img-pattern@3x.png 3x"
              className="w-full h-full absolute top-0 left-0"
            />
          </div>
          <div className="absolute w-full h-full overflow-hidden">
            <img
              src="/img/img-video-thumb@3x.png"
              alt=""
              className="blur-[50px]"
            />
            <div className="w-full h-full absolute bg-black top-0 left-0 opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-20 w-full max-w-[1920px] max-h-[870px] overflow-hidden">
            <div className="pt-[56.25%]" />
            <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
              <div className="flex justify-center items-center flex-col relative z-10">
                <div className="text-white">{/* contnet */}</div>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 container">
            {/* ????????? ????????? bg-gray-600 */}
            <div className="absolute w-full h-full bg-gray-600">
              {/* img */}
            </div>
            <button className="flex items-center gap-x-[12px] xl:gap-x-[20px] px-[18px] xl:px-[40px] py-[11px] xl:py-[26px] border xl:border-[3px] border-white rounded-full text-white absolute text-[14px] xl:text-[20px] font-Pretendard font-bold bottom-[60px] xl:bottom-[91px] left-[20px] xl:left-[50px]">
              ????????? ????????????{' '}
              <i className="icon-arrow-right-w text-[10px] xl:text-[12px]" />
            </button>
            <button className="flex items-center gap-x-[12px] xl:gap-x-[20px] px-[18px] xl:px-[40px] py-[11px] xl:py-[26px] border xl:border-[3px] border-white rounded-full text-white absolute text-[14px] xl:text-[20px] font-Pretendard font-bold bottom-[70px] xl:bottom-[128px] left-1/2 -translate-x-1/2">
              ????????? ????????????{' '}
              <i className="icon-arrow-right-w text-[10px] xl:text-[12px]" />
            </button>
            <button className="flex items-center gap-x-[12px] xl:gap-x-[20px] px-[18px] xl:px-[40px] py-[11px] xl:py-[26px] border xl:border-[3px] border-white rounded-full text-white absolute text-[14px] xl:text-[20px] font-Pretendard font-bold bottom-[30px] xl:bottom-[39px] right-[20px] xl:right-[40px]">
              ????????? ????????????{' '}
              <i className="icon-arrow-right-w text-[10px] xl:text-[12px]" />
            </button>
          </div>
          <div className="absolute w-full h-full overflow-hidden">
            <img
              src="/img/img-video-thumb@3x.png"
              alt=""
              className="blur-[50px]"
            />
            <div className="w-full h-full absolute bg-black top-0 left-0 opacity-50"></div>
          </div>
        </SwiperSlide>
        <div className="absolute h-[37px] xl:h-[60px] right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <SlideNextButton />
        </div>
        <div className="absolute h-[37px] xl:h-[60px] left-0 rotate-180 top-1/2 translate-x-1/2 -translate-y-1/2 z-10">
          <SlidePrevButton />
        </div>
      </Swiper>
      <div className="h-[57px] absolute bottom-[20px] left-1/2 -translate-x-1/2 z-10 hidden xl:block">
        <img
          src="/img/icon-scroll.png"
          srcSet="/img/icon-scroll@2x.png 2x,
              /img/icon-scroll@3x.png 3x"
        />
      </div>
    </div>
  );
};

export default MainBannerSlide;
