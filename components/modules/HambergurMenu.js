import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

function HambergurMenu({show , handleClose , theme}) {

  return (
    <div>
      <Offcanvas style={{width:"320px"}} className={theme =="theme-night" ? "bg-gray-900 color-gray-50" : "bg-white color-gray-700"} show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className={`border-bottom w-100 d-flex justify-content-between`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}>
          <Offcanvas.Title className='mb-0'>
          <Link className='d-flex' href={"/"}>
          <Image style={{width:"146px" , height:"40px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-dark.png'} />
          </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='pt-0'>
            <div className='mobile-menu-wrap mobile-header-border'>
              <nav>
                
                <Link style={{fontFamily:"KalamehWeb-Bold" , }} className="btn btn-linear w-100 my-3 d-inline-block hover-up hover-shadow" onClick={()=>handleClose()} href="/signup">ورود همکاران</Link>
                <ul className='mobile-menu font-heading'>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/"}>صفحه اصلی</Link></li>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/sites"}>سامانه های دبستان</Link></li>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/articles"}>مقالات آموزشی</Link></li>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/gallery"}>آلبوم تصاویر</Link></li>
                <li className={`p-3 ${theme == "theme-day" && "border-bottom"}`} style={{borderBottom: `${theme == "theme-night" && "1px solid #222f43"}`}}><Link onClick={()=>handleClose()} className={`p-0 ${theme == "theme-night" ? "color-gray-200" : "color-gray-800"}`} style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} href={"/about-school"}>درباره ما</Link></li>
                </ul>
              </nav>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default HambergurMenu;
