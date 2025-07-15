import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HambergurMenu from './HambergurMenu';
import SignInButton from '@/components/modules/SignInButton';

const Header = () => {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const linkStyle = {
    fontFamily: "KalamehWeb-Bold",
  };

  return (
    <header className="sticky-bar mt-0 d-flex justify-content-center">
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
                <ul className="main-menu mb-0 ps-0 d-flex justify-content-start align-items-center">
                  <li className="mx-3">
                    <Link
                      href="/hamyar"
                      style={linkStyle}
                      className={`p-0 ${pathname === "/hamyar" ? "active" : "text-dark"}`}
                    >
                      صفحه اصلی
                    </Link>
                  </li>

                  <li className="has-children mx-3">
                    <Link
                      href="/hamyar/bases"
                      style={linkStyle}
                      className={`p-0 ${pathname === "/hamyar/bases" ? "active" : "text-dark"}`}
                    >
                      پایه ها
                    </Link>
                    <ul className="sub-menu shadow-sm">
                      <li>
                        <Link className="text-end" href="/hamyar/sevom">
                          <span style={linkStyle}>پایه سوم</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-end" href="/hamyar/chaharom">
                          <span style={linkStyle}>پایه چهارم</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-end" href="/hamyar/panjom">
                          <span style={linkStyle}>پایه پنجم</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-end" href="/hamyar/sheshom">
                          <span style={linkStyle}>پایه ششم</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-children mx-3">
                    <Link
                      href="/hamyar/books"
                      style={linkStyle}
                      className={`p-0 ${pathname === "/hamyar/books" ? "active" : "text-dark"}`}
                    >
                      کتابهای درسی
                    </Link>
                    <ul className="sub-menu shadow-sm">
                      <li>
                        <Link className="text-end" href="/hamyar/sevom/books">
                          <span style={linkStyle}>کتابهای درسی سوم</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-end" href="/hamyar/chaharom/books">
                          <span style={linkStyle}>کتابهای درسی چهارم</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-end" href="/hamyar/panjom/books">
                          <span style={linkStyle}>کتابهای درسی پنجم</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="text-end" href="/hamyar/sheshom/books">
                          <span style={linkStyle}>کتابهای درسی ششم</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="mx-3">
                    <Link
                      href="/hamyar/about-developer"
                      style={linkStyle}
                      className={`p-0 ${pathname === "/hamyar/about-developer" ? "active" : "text-dark"}`}
                    >
                      درباره توسعه دهنده
                    </Link>
                  </li>

                  <li className="mx-3">
                    <Link
                      href="/hamyar/developer"
                      style={linkStyle}
                      className={`p-0 ${pathname === "/hamyar/developer" ? "active" : "text-dark"}`}
                    >
                      درباره سامانه
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      href="/hamyar/about-school"
                      style={linkStyle}
                      className={`p-0 ${pathname === "/hamyar/about-school" ? "active" : "text-dark"}`}
                    >
                      درباره ما
                    </Link>
                  </li>

                  <li className="mx-3">
                    <Link
                      href="/"
                      style={{fontFamily: "KalamehWeb-Bold" , color:"#654fef"}}
                      className={`p-0`}
                    >
                      بازگشت به سایت دبستان
                    </Link>
                  </li>
                  <li className="mx-3">
                    <SignInButton />
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* LOGO */}
          <div className="mx-auto mx-xl-0 text-center">
            <Link style={{ height: "47px" }} href="/hamyar">
              <Image
                style={{ width: "146px", height: "40px" }}
                alt="logo"
                width={1000}
                height={300}
                src="/images/hamyar/components/modules/logo-dark.png"
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
