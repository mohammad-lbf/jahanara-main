import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HambergurMenu from './HambergurMenu';

const Header = () => {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // سبک مشترک برای فونت
  const linkStyle = {
    fontFamily: "KalamehWeb-Bold",
  };

  return (
    <header className="sticky-bar mt-0 d-flex justify-content-center">
      <nav className="bg-gray-900 header border-bottom shadow-sm px-xl-2 px-4">
        <div className="main-header justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="text-end d-flex justify-content-end align-items-center"></div>
            
            <div className="header-nav">
              <nav className="d-none d-xl-block">
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

                  {/* پایه‌ها */}
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
                        </Link>hamyar/
                      </li>
                    </ul>
                  </li>

                  {/* کتاب‌های درسی */}
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
                      مستندات
                    </Link>
                  </li>

                  <li className="mx-3">
                    <Link
                      href="/"
                      style={linkStyle}
                      className={`p-0 ${pathname === "/" ? "active" : "text-dark"}`}
                    >
                      بازگشت به سایت دبستان
                    </Link>
                  </li>
                </ul>
              </nav>

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
          </div>

          <div className="d-flex align-items-center">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
