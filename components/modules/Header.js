import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HambergurMenu from './HambergurMenu';

const Header = () => {
    const {pathname} = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header style={{zIndex:"100"}} className={`sticky-bar mt-0 d-flex justify-content-center`}>
            <nav className={`bg-gray-900 header border-bottom shadow-sm px-xl-2 px-4`}>
                <div className={`main-header justify-content-between align-items-center`}>
                    <div className='d-flex align-items-center'>
                    <div className={`text-end d-flex justfy-content-end align-items-center`}>
                        </div>
                        <div className={`header-nav w-100`}>
                            <nav className={`d-none d-xl-flex align-items-center w-100`}>
                                <ul className={`main-menu me-4 mb-0 ps-0 d-flex justify-content-start align-items-center`}>
                                    <li className='ms-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/" ? "active" : "text-dark"}`} href={"/"}>صفحه اصلی</Link></li>
                                    <li className='has-children mx-3'>
                                        <Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/sites" ? "active" : "text-dark"}`}  href={"/sites"}>
                                        سامانه های دبستان
                                        </Link>
                                        <ul className="sub-menu shadow-sm ">
                                        <li>
                                            <Link className='text-end' href='/sites'>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>همه سامانه ها</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='text-end' href={'/hamyar'}>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>سامانه همیار</span>
                                                </Link>
                                            </li>
                                            <li>
                                            <Link className='text-end' href='/mostamar'>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>سامانه یادگیری مستمر</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        </li>
                                        <li className='mx-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/articles" ? "active" : "text-dark"}`} href={"/articles"}>مقالات آموزشی</Link></li>
                                        <li className='mx-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/gallery" ? "active" : "text-dark"}`} href={"/gallery"}>آلبوم تصاویر</Link></li>
                                        <li className='mx-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/about-school" ? "active" : "text-dark"}`} href={"/about-school"}>درباره ما</Link></li>
                                </ul>
                                        <Link style={{fontFamily:"KalamehWeb-Bold"}} className="mx-3 btn btn-linear d-none d-sm-inline-block ms-1 hover-up hover-shadow" href="/signup">ورود همکاران</Link>
                            </nav>
                            <button style={{backgroundColor:"transparent"}} onClick={handleShow} className="border-0 burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></button>
                            <HambergurMenu show={show} handleClose={handleClose} />
                        </div>
                    </div>

                        <div className={`d-flex align-items-center`}>
                                
                        <Link style={{height:"47px"}} className='' href={"/"}>
                                <Image style={{width:"146px" , height:"40px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-dark.png'} />
                            </Link>

                        </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;