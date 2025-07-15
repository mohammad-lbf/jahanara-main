import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HambergurMenu from './HambergurMenu';
import SignInButton from './SignInButton';

const Header = () => {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const linkStyle = {
    fontFamily: "KalamehWeb-Bold",
  };

  return (
    <header style={{ zIndex: "100" }} className="sticky-bar mt-0 d-flex justify-content-center">
      <nav className="bg-gray-900 header border-bottom shadow-sm px-xl-2 px-2">
        <div className="main-header d-flex justify-content-between align-items-center">
          
          {/* Left Side (Hamburger in mobile, nav in desktop) */}
          <div className="d-flex align-items-center">
            {/* Hamburger - Mobile Only */}
            <div className="d-xl-none me-2">
              <button
                style={{ backgroundColor: "transparent" }}
                onClick={handleShow}
                className="border-0 burger-icon burger-icon-white"
              >
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </button>
              <HambergurMenu show={show} handleClose={handleClose} />
            </div>

            {/* Desktop Nav */}
            <div className="header-nav d-none d-xl-block">
              <nav>
                <ul className="main-menu me-4 mb-0 ps-0 d-flex justify-content-start align-items-center">
                  <li className='ms-3'>
                    <Link
                      style={linkStyle}
                      className={`p-0 ${pathname === "/" ? "active" : "text-dark"}`}
                      href="/"
                    >
                      صفحه اصلی
                    </Link>
                  </li>
                  <li className="has-children mx-3">
                    <Link
                      style={linkStyle}
                      className={`p-0 ${pathname === "/sites" ? "active" : "text-dark"}`}
                      href="/sites"
                    >
                      سامانه های دبستان
                    </Link>
                    <ul className="sub-menu shadow-sm">
                      <li>
                        <Link className="text-end" href="/sites">
                          <span style={linkStyle}>همه سامانه ها</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-end" href="/hamyar">
                          <span style={linkStyle}>سامانه همیار</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-end" href="/mostamar">
                          <span style={linkStyle}>سامانه یادگیری مستمر</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mx-3">
                    <Link
                      style={linkStyle}
                      className={`p-0 ${pathname === "/articles" ? "active" : "text-dark"}`}
                      href="/articles"
                    >
                      مقالات آموزشی
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      style={linkStyle}
                      className={`p-0 ${pathname === "/gallery" ? "active" : "text-dark"}`}
                      href="/gallery"
                    >
                      آلبوم تصاویر
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      style={linkStyle}
                      className={`p-0 ${pathname === "/about-school" ? "active" : "text-dark"}`}
                      href="/about-school"
                    >
                      درباره ما
                    </Link>
                  </li>
                  <li className="mx-3">
                    <SignInButton />
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* LOGO CENTER */}
          <div className="mx-auto mx-xl-0 text-center">
            <Link style={{ height: "47px" }} href="/">
              <Image
                style={{ width: "146px", height: "40px" }}
                alt="logo"
                width={1000}
                height={300}
                src="/images/components/modules/logo-dark.png"
              />
            </Link>
          </div>

          {/* SignIn Button - Mobile Only */}
          <div className="d-xl-none">
            <SignInButton />
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
