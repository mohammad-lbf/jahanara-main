import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import SignInButton from '@/components/modules/SignInButton';

function HambergurMenu({ show, handleClose, theme }) {
  const linkStyle = {
    fontSize: "16px",
    fontFamily: "KalamehWeb-Bold",
  };

  const getBorderStyle = () => {
    return theme === "theme-night" ? "1px solid #222f43" : undefined;
  };

  const linkClassName = `p-0 ${theme === "theme-night" ? "color-gray-200" : "color-gray-800"}`;
  const liClassName = `p-3 ${theme === "theme-day" ? "border-bottom" : ""}`;

  return (
    <div>
      <Offcanvas
        style={{ width: "320px" }}
        className={theme === "theme-night" ? "bg-gray-900 color-gray-50" : "bg-white color-gray-700"}
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header
          closeButton
          className="border-bottom w-100 d-flex justify-content-between"
          style={{ borderBottom: getBorderStyle() }}
        >
          <Offcanvas.Title className="mb-0">
            <Link className="d-flex" href="/">
              <Image
                style={{ width: "146px", height: "40px" }}
                alt="logo"
                width={1000}
                height={300}
                src="/images/hamyar/components/modules/logo-dark.png"
              />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="pt-0">
          <div className="mobile-menu-wrap mobile-header-border">
            <nav>
              <ul className="mobile-menu font-heading">
                <li
                  className={liClassName}
                  style={{ borderBottom: getBorderStyle() }}
                >
                  <Link
                    onClick={handleClose}
                    className={linkClassName}
                    style={linkStyle}
                    href="/hamyar/"
                  >
                    صفحه اصلی
                  </Link>
                </li>

                <li
                  className={liClassName}
                  style={{ borderBottom: getBorderStyle() }}
                >
                  <Link
                    onClick={handleClose}
                    className={linkClassName}
                    style={linkStyle}
                    href="/hamyar/bases"
                  >
                    پایه ها
                  </Link>
                </li>

                <li
                  className={liClassName}
                  style={{ borderBottom: getBorderStyle() }}
                >
                  <Link
                    onClick={handleClose}
                    className={linkClassName}
                    style={linkStyle}
                    href="/hamyar/books"
                  >
                    کتابهای درسی
                  </Link>
                </li>

                <li
                  className={liClassName}
                  style={{ borderBottom: getBorderStyle() }}
                >
                  <Link
                    onClick={handleClose}
                    className={linkClassName}
                    style={linkStyle}
                    href="/hamyar/about-developer"
                  >
                    درباره توسعه دهنده
                  </Link>
                </li>

                <li
                  className={liClassName}
                  style={{ borderBottom: getBorderStyle() }}
                >
                  <Link
                    onClick={handleClose}
                    className={linkClassName}
                    style={linkStyle}
                    href="/hamyar/developer"
                  >
                    درباره سامانه
                  </Link>
                </li>
                <li
                  className={liClassName}
                  style={{ borderBottom: getBorderStyle() }}
                >
                  <Link
                    onClick={handleClose}
                    className={linkClassName}
                    style={linkStyle}
                    href="/hamyar/about-school"
                  >
                    درباره ما
                  </Link>
                </li>

                <li className={`p-3 border-bottom`} style={{ borderBottom: `${theme === "theme-night" && "1px solid #222f43"}` }}>
                  <Link onClick={handleClose} className={linkClassName} style={{ ...linkStyle, color: "#654fef" }} href="/">
                    بازگشت به سایت دبستان
                  </Link>
                </li>
                <li className='p-3'>
                  <SignInButton />
                </li>
              </ul>
            </nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default HambergurMenu;
