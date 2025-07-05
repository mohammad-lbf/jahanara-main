import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import Properties from '../modules/HomePage/Properties';
import CoursesSection from '../modules/HomePage/CoursesSection';
import AutoCounter from '../elements/AutoCounter';
import SitesSection from '../modules/HomePage/SitesSection';
import GallerySection from '../modules/HomePage/GallerySection';
import ArticlesSection from '../modules/HomePage/ArticlesSection';
import HonorsBoard from '../modules/HomePage/HonorsBoard';
import ContactInfo from '../modules/HomePage/ContactInfo';

const HomePage = () => {
  return (
    <div className="cover-home-3 page-padding-tops">
      
      {/* Header Banner */}
      <div className="school-banner-wrapper">
        <div className="school-banner-content row">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="school-banner-meta text-center">
              <Image 
                src="/images/Emblem_of_Iran.png" 
                width={235} 
                height={235} 
                alt="آرم جمهوری اسلامی ایران"
                style={{ width: "50px", height: "50px" }} 
              />
              <p>جمهوری اسلامی ایران</p>
              <p>وزارت آموزش و پرورش</p>
              <p>اداره کل آموزش و پرورش شهر تهران</p>
              <p>اداره آموزش و پرورش منطقه ۱۲ تهران</p>
            </div>
          </div>
          <div className="col-12 col-md-6 school-banner-title">
          <h1 className='mb-3 fs-1'>دبستان دولتی پسرانه</h1>
            <h1>شهید جهان آرا</h1>
          </div>
        </div>
      </div>

      <AutoCounter />

      {/* معرفی مدرسه */}
      <div className="container bg-white border my-4 py-4 shadow-sm rounded">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h5 
              className="text-center text-md-end pb-2"
              style={{
                fontSize: "24px",
                color: "#03004E",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Bold"
              }}
            >
              معرفی دبستان شهید جهان‌آرا
            </h5>
            <p 
              className="text-justify mt-2"
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Bold",
                direction: "rtl",
                textAlign: "justify"
              }}
            >
              دبستان شهید جهان‌آرا یکی از مدارس برجسته و فعال در منطقه ۱۲ تهران است که با فراهم آوردن محیطی امن و دوستانه، نقش مهمی در ارتقای کیفیت آموزش ابتدایی ایفا می‌کند. این مدرسه با پذیرش دانش‌آموزان در پایه‌های سوم، چهارم، پنجم و ششم، تلاش می‌کند تا با ارائه برنامه‌های آموزشی و پرورشی متنوع، زمینه پیشرفت علمی و تربیتی دانش‌آموزان را فراهم کند. هدف اصلی مدرسه، تربیت افرادی مسئولیت‌پذیر، خلاق و اخلاق‌مدار است که بتوانند در آینده نقش مؤثری در جامعه ایفا کنند.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <Link
                href="/about-school"
                className="mt-3 btn-main-2 text-white d-flex align-items-center"
                style={{ width: "fit-content" }}
              >
                <span style={{ fontFamily: "KalamehWeb-Bold" }}>
                  اطلاعات بیشتر
                </span>
                <i className="bi bi-chevron-double-left me-2 pt-2 animated-icon"></i>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 text-center">
            <Image
              src="/images/components/modules/IMG_۲۰۲۴۱۱۲۲_۱۱۵۹۰۵-min.jpg"
              width={720}
              height={751}
              alt="نمایی از دبستان شهید جهان‌آرا"
              className="rounded shadow mt-4 mt-md-0"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
      </div>

      {/* سایر بخش‌ها */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="mb-4">
            <Properties />
          </div>
        </div>
      </div>

      <HonorsBoard />
      <SitesSection />
      <ArticlesSection />
      <CoursesSection />
      <GallerySection />
      <ContactInfo />
    </div>
  );
};

export default HomePage;
