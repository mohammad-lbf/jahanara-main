import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.mainFooter} w-100`}>
        <div className="container pt-4 px-sm-4 rounded">
            <div className="row justify-content-between">
                <div className="col-12 col-lg-4 text-center text-lg-end">
                    <div className="d-flex align-items-center w-100 justify-content-center justify-content-lg-start">
                            <div className="d-flex flex-column align-items-center align-items-lg-start text-decoration-none">
                            <Link style={{height:"47px"}} className='' href={"/mostamar"}>
                                <Image style={{width:"146px" , height:"40px"}} alt='logo' width={1000} height={300} src={'/images/mostamar/components/modules/logo-light.png'} />
                            </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center justify-content-lg-start w-100'>
                        <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"14px"}} className={`lh-lg mt-3 mb-3 ${styles.textColorMilky}`} >
                        سامانه یادگیری مستمر دبستان شهید جهان‌آرا بستری آموزشی ویژه معلمان این مدرسه است که با هدف توسعه حرفه‌ای و ارتقای مهارت‌های آموزشی طراحی شده است. این سامانه دوره‌های آموزشی ضمن خدمت را به‌صورت ساختاریافته و کاربردی ارائه می‌دهد تا معلمان بتوانند به دانش و روش‌های نوین تدریس دسترسی داشته باشند و سطح کیفی آموزش را بهبود بخشند.
                        {/* آدرس: میدان خراسان، خیابان خراسان، خیابان لرزاده، بعد از درمانگاه خیریه شهدای لرزاده، پلاک ۲۶ */}
                            </p>
                            
                    </div>
                </div>
                <div className="col-12 col-lg-4 text-center text-lg-end">
                <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"14px"}} className={`lh-lg mt-3 mb-3 ${styles.textColorMilky}`}>
                    <i className="bi bi-globe ms-1"></i>
                    سایت دبستان: www.jahanaraschool.ir</p>
                <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"14px"}} className={`lh-lg mt-3 mb-3 ${styles.textColorMilky}`} >
                <i class="bi bi-geo-alt-fill"></i>  آدرس: میدان خراسان، خیابان خراسان، خیابان لرزاده، بعد از درمانگاه خیریه شهدای لرزاده، پلاک ۲۶
                            </p>
                <p className='text-white'>
                <i class="bi bi-telephone-fill ms-1"></i>
                    شماره تماس:  ۳۳۵۴۳۱۴۱ - ۳۳۵۴۳۱۴۱
                </p>
                <p className='text-white text-center text-lg-end mt-3'></p>
                <p className='text-white text-center text-lg-end mt-2'></p>
                <p className='text-white mt-3'>
                <i class="bi bi-envelope-fill ms-1"></i>
                    کد پستی: 1177935311
                </p>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                    <p style={{width:"170px" ,  fontFamily:"KalamehWeb-Bold"}} className={`text-warning mb-4 mt-4 mt-lg-0 fw-bold text-center ${styles.textColorMilky}`}>
                        بخش های سایت
                    </p>
                    <nav style={{width:"fit-content"}} className="d-flex flex-column text-center text-lg-end">
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/mostamar/">
                            صفحه اصلی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/mostamar/courses">
                            دوره های آموشی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/articles">
                            مقالات آموزشی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/mostamar/about-developer">
                            درباره توسعه دهنده
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/mostamar/developer">
                            درباره سامانه
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/mostamar/about-school">
                            درباره ما
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/">
                            بازگشت به سایت دبستان
                        </Link>
                        {/* <div className='m-3'><a style={{fontFamily:"KalamehWeb-Bold" , border:"none"}} className={`p-0 border-0`} href={"https://worksave-jahan.netlify.app/"}><button style={{fontFamily:"KalamehWeb-Bold"}} class="button-85 border-0" role="button">برنامه پیشرفته ثبت کار</button></a></div> */}
                    </nav>
                </div>
            </div>
        </div>
  <div className="d-flex flex-column align-items-center text-light pt-2 container border-top border-secondary">
      <p className="mb-2"> &copy; تمامی حقوق محفوظ است</p>
      <p className="mb-2">Jahanara school - 2025</p>
  </div>
        </footer>

    );
};

export default Footer;