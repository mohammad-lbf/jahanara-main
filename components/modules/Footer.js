import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer style={{backgroundColor:"#03004e"}} className={`${styles.mainFooter} w-100`}>
        <div className="container pt-4 px-sm-4 rounded">
            <div className="row justify-content-between">
                <div className="col-12 col-lg-4 text-center text-lg-end">
                    <div className="d-flex align-items-center w-100 justify-content-center justify-content-lg-start">
                            <div className="d-flex flex-column align-items-center align-items-lg-start text-decoration-none">
                            <Link style={{height:"47px"}} className='' href={"/"}>
                                <Image style={{width:"146px" , height:"40px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-light.png'} />
                            </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center justify-content-lg-start w-100'>
                        <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"14px"}} className={`lh-lg mt-3 mb-3 ${styles.textColorMilky}`} >
                        دبستان شهید جهان‌آرا یکی از مدارس برجسته و فعال در منطقه ۱۲ تهران است که با فراهم آوردن محیطی امن و دوستانه، نقش مهمی در ارتقای کیفیت آموزش ابتدایی ایفا می‌کند. این مدرسه با پذیرش دانش‌آموزان در پایه‌های سوم، چهارم، پنجم و ششم، تلاش می‌کند تا با ارائه برنامه‌های آموزشی و پرورشی متنوع، زمینه پیشرفت علمی و تربیتی دانش‌آموزان را فراهم کند. هدف اصلی مدرسه، تربیت افرادی مسئولیت‌پذیر، خلاق و اخلاق‌مدار است که بتوانند در آینده نقش مؤثری در جامعه ایفا کنند.
                            </p>
                            
                    </div>
                </div>
                <div className="col-12 col-lg-4 text-center text-lg-end">
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
                <p className='text-white text-center text-lg-end mt-2'></p>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                    <p style={{width:"170px" ,  fontFamily:"KalamehWeb-Bold"}} className={`text-warning mb-4 mt-4 mt-lg-0 fw-bold text-center ${styles.textColorMilky}`}>
                        بخش های سایت
                    </p>
                    <nav style={{width:"fit-content"}} className="d-flex flex-column text-center text-lg-end">
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/">
                            صفحه اصلی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/sites">
                            سامانه های دبستان
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/articles">
                            مقالات آموزشی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/gallery">
                            آلبوم تصاویر
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/about-school">
                            درباره ما
                        </Link>
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