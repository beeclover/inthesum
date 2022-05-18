import React from 'react';
import cx from 'classnames';

const Thumbnail = ({ img, type }) => {
  const ModifyThumbnail = () =>
    React.cloneElement(img(), {
      className: 'absolute object-cover',
    });

  let Cover = () => <></>;
  if (type === 'video') {
    Cover = () => (
      <div className="absolute w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <i className="icon-right-dir text-[30px] text-white" />
      </div>
    );
  }
  return (
    <div className="w-[70px] h-[70px] rounded-[20px] overflow-hidden relative">
      <ModifyThumbnail />
      <Cover />
    </div>
  );
};
/**
 *
 * @param {string} name
 * @param {string} time
 * @param {string} content
 * @param {[{img: JSX.Element, type: string img | video}]} thumbnail
 * @param {JSX.Element} characterImg
 * @returns
 */
const CharacterItem = ({ name, time, content, thumbnail, characterImg }) => {
  let Thumbnails = () => <></>;
  if (thumbnail) {
    Thumbnails = () => (
      <div className="flex gap-x-[10px] mt-[20px] items-center">
        {thumbnail?.map((t, index) => {
          if (index < 2) return <Thumbnail {...t} key={`index-${index}`} />;
        })}
        {thumbnail.length > 2 && (
          <span className="opacity-20 font-black text-[32px] top-[5px] font-Pretendard">
            ...
          </span>
        )}
      </div>
    );
  }
  console.log(thumbnail);
  return (
    <div
      className={cx('relative max-w-[320px] xl:max-w-[270px]', {
        'min-h-[320px] md:min-h-[380px]': thumbnail === undefined,
        'min-h-[420px]': thumbnail !== undefined,
      })}
    >
      <div className="relative z-10 px-[36px] py-[34px] bg-[#f4f6fa] rounded-[30px]">
        <div className="text-[30px] font-extrabold text-left font-TmoneyRoundWind leading-none">
          {name}
          <span className="w-[39px] relative inline-block top-[6px] mr-[5px]">
            <img
              src="/img/new@3x.png"
              srcSet="/img/new@2x.png 2x,
                  /img/new@3x.png 3x"
              alt="new"
            />
          </span>
          <span className="text-[14px] font-normal text-[#999]">{time}</span>
        </div>
        <div className="mt-[20px] line-clamp-2 text-[14px] leading-[1.36] font-TmoneyRoundWind font-normal">
          {content()}
        </div>
        <Thumbnails />
      </div>
      <div className="absolute bottom-0 right-0 z-10">{characterImg()}</div>
    </div>
  );
};

export default CharacterItem;
