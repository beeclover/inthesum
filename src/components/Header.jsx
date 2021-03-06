import React, { useState } from 'react';
import classnames from 'classnames';
import HeaderMobile from './HeaderMobile';
import Select from '../components/Select';
import './Header.scss';

const Header = () => {
  const [isMenuOver, setIsMenuOver] = useState(false);
  return (
    <>
      <header className="z-[90] relative">
        <HeaderMobile className={classnames('bg-white')} />
        {/* policy tw-bg-white */}
        <div
          id="dt-menu-wrap"
          className={classnames('top-0 bg-white border-b border-[#f1f1f1]', {
            active: isMenuOver,
          })}
          onMouseLeave={() => {
            setIsMenuOver(false);
          }}
        >
          <div className="dt-menu">
            <h1 className="logo">
              <a href="/">
                <img
                  src="/img/logo-inthesum-small.webp"
                  srcSet="/img/logo-inthesum-small@2x.webp 2x,
                      /img/logo-inthesum-small@3x.webp 3x"
                  alt="inthesum logo"
                  className="w-auto"
                />
              </a>
            </h1>
            <nav id="gnb" onMouseEnter={() => setIsMenuOver(true)}>
              <ul>
                <li>
                  <div className="menu-wrap">
                    <a href="#1">개임소개</a>
                    <div className="submenu">
                      <div className="items">
                        <a href="#">소개영상</a>
                      </div>
                      <div className="items">
                        <a href="#">주요스토리</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-wrap">
                    <a href="#2">인더섬 개발일지</a>
                    <div className="submenu">
                      <div className="items">
                        <a href="#">with BTS</a>
                      </div>
                      <div className="items">
                        <a href="#">개발 PD 노트</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-wrap">
                    <a href="#" className="relative">
                      made by ARMY
                      <img
                        src="/img/coming-soon.png"
                        srcSet="/img/coming-soon@2x.png 2x,
                              /img/coming-soon@3x.png 3x"
                        alt="comming soon"
                        className="xl:h-[38px] w-auto absolute bottom-full right-0 translate-x-[10px] translate-y-[13px]"
                      />
                    </a>
                    <div className="submenu">
                      <div className="items">
                        <a href="#">인더섬 가이드</a>
                      </div>
                      <div className="items">
                        <a href="#">BTS 의상실</a>
                      </div>
                      <div className="items">
                        <a href="#">주간 인더섬 매거진</a>
                      </div>
                      <div className="items">
                        <a href="#">BTS 의뢰 컨텐츠</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="menu-wrap">
                    <a href="#">커뮤니티</a>
                    <div className="submenu">
                      <div className="items">
                        <a href="#">공지사항</a>
                      </div>
                      <div className="items">
                        <a href="#">설문공간</a>
                      </div>
                      <div className="items">
                        <a href="#">FAQ</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="right-menu">
              <ul>
                <li>
                  <a href="#">
                    <img src="/img/icon-gnb-my.svg" alt="account img" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="logout"
                      src="/img/icon-logout.svg"
                      alt="logout img"
                    />
                  </a>
                </li>
                <li>
                  <Select
                    button={({ children }) => (
                      <button className="leading-none pt-[1.5px] focus:outline-none focus:shadow-none focus:ring-0 cursor-pointer flex items-center gap-x-[10px] lang">
                        {children}
                      </button>
                    )}
                    options={[
                      {
                        id: 'option-1',
                        name: 'KR',
                      },
                      {
                        id: 'option-2',
                        name: 'JP',
                      },
                      {
                        id: 'option-3',
                        name: 'US',
                      },
                    ]}
                    name="gnb"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[var(--header-g-height)]" />
    </>
  );
};

export default Header;
