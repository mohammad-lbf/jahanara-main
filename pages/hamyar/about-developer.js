import Head from "next/head";
import Skills from "@/components/modules/Skills";
import Image from "next/image";
import React from "react";
import HamyarLayout from "@/components/layout/HamyarLayout";

const AboutDeveloper = () => {
  const canonicalUrl = "https://jahanaraschool.ir/hamyar/about-developer";

  return (
    <>
      <Head>
        <title>درباره محمد لبافی | آموزگار و توسعه دهنده وب | دبستان شهید جهان‌آرا</title>
        <meta
          name="description"
          content="محمد لبافی، آموزگار و توسعه‌دهنده ارشد وب (Senior MERN Stack Developer)، طراح و برنامه‌نویس سامانه همیار دبستان شهید جهان‌آرا است که این سامانه را برای تسهیل آموزش معلمان و دانش‌آموزان طراحی کرده است."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="محمد لبافی" />
        <meta
          name="keywords"
          content="محمد لبافی, توسعه‌دهنده وب, سامانه همیار, MERN Stack Developer, برنامه نویس Next.js, دبستان شهید جهان آرا"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:title"
          content="درباره محمد لبافی | آموزگار و توسعه دهنده وب | دبستان شهید جهان‌آرا"
        />
        <meta
          property="og:description"
          content="محمد لبافی، آموزگار و توسعه‌دهنده ارشد وب (Senior MERN Stack Developer)، طراح و برنامه‌نویس سامانه همیار دبستان شهید جهان‌آرا است که این سامانه را برای تسهیل آموزش معلمان و دانش‌آموزان طراحی کرده است."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta
          property="og:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta
          name="twitter:title"
          content="درباره محمد لبافی | آموزگار و توسعه دهنده وب | دبستان شهید جهان‌آرا"
        />
        <meta
          name="twitter:description"
          content="محمد لبافی، آموزگار و توسعه‌دهنده ارشد وب (Senior MERN Stack Developer)، طراح و برنامه‌نویس سامانه همیار دبستان شهید جهان‌آرا است که این سامانه را برای تسهیل آموزش معلمان و دانش‌آموزان طراحی کرده است."
        />
        <meta
          name="twitter:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />
      </Head>
      <HamyarLayout>
      <div className="container page-padding-tops">
        <div className="pt-4 mt-2 mb-2 row justify-content-center">
          <div className="col-12 col-sm-10 py-4 border my-4 mt-0 rounded bg-white shadow-sm">
            <h5
              style={{
                fontSize: "24px",
                color: "#654fef",
                fontFamily: "KalamehWeb-Bold",
              }}
              className="text-center my-2 mt-1 pb-3"
            >
              درباره توسعه‌دهنده
            </h5>

            {/* عکس پرسونال
            <div className="text-center mb-4">
              <Image
                src="/images/20220719_222926.jpg"
                alt="محمد لبافی"
                width={1280}
                height={1280}
                className=""
                style={{ borderRadius: "50%" , width:"160px" , height:"160px",boxShadow: "5px 5px 15px rgba(0, 123, 255, 0.64) , -5px -5px 15px rgba(217, 0, 255, 0.64) "   }}
              />
            </div> */}
            {/* کارت اطلاعات شخصی و آمار */}
            <div className="row justify-content-center mb-4">
  <div className="col-12">
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 border rounded bg-light shadow-sm">

      {/* مشخصات فردی و تخصص */}
      <div className="d-flex flex-column align-items-center text-center ps-md-4">
        <div className="text-center">
          <Image
            src="/images/20220719_222926.jpg"
            alt="محمد لبافی"
            width={1280}
            height={1280}
            className="mb-4"
            style={{ borderRadius: "50%" , width:"160px" , height:"160px",boxShadow: "5px 5px 15px rgba(0, 123, 255, 0.64) , -5px -5px 15px rgba(217, 0, 255, 0.64) "   }}
          />
          <h5
            className=""
            style={{ fontFamily: "KalamehWeb-Bold", color: "#464749" }}
          >
            محمد لبافی
          </h5>
          <span
            className="mt-4"
            style={{
              fontFamily: "KalamehWeb-Medium",
              color: "#464749",
              fontSize: "15px",
            }}
          >
            آموزگار، توسعه دهنده ارشد وب
          </span>
          <p
            className="mt-2"
            style={{ fontFamily: "KalamehWeb-Medium", color: "#464749" , fontSize: "13px", }}
          >
            توسعه دهنده سامانه های دبستان شهید جهان آرا
          </p>
        </div>
        <h5
            className="mt-2"
            style={{ fontFamily: "KalamehWeb-Bold", color: "#464749" , fontSize: "13px", }}
          >
            گرایش های تخصصی:
          </h5>

        <div className="d-flex flex-wrap justify-content-center mt-0">
          {[
            "علوم تربیتی",
            "آموزش ابتدایی",
            "مدیریت آموزشی",
            "توسعه نرم افزار",
            "توسعه وب",
          ].map((field, index) => (
            <span
              key={index}
              className="badge m-1"
              style={{
                fontFamily: "KalamehWeb-Bold",
                fontSize: "12px",
                width:"100px",
                background: "linear-gradient(135deg,rgb(0, 158, 18),rgb(0, 130, 22))"
              }}
            >
              {field}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>



            {/* توضیحات شخصی‌تر */}
            {/* <p
              style={{
                fontSize: "17px",
                color: "#464749",
                fontFamily: "KalamehWeb-Bold",
              }}
              className="text-center my-4"
            >
              نام و نام خانوادگی توسعه‌دهنده: محمد لبافی
            </p> */}

            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                fontFamily: "KalamehWeb-Bold",
              }}
              className="text-end mt-4 mb-2"
            >
              همکاران محترم، اولیا گرامی و دانش‌آموزان عزیز دبستان شهید جهان آرا
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                fontFamily: "KalamehWeb-Bold",
              }}
              className="text-end my-2"
            >
              با سلام و احترام
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Medium",
              }}
              className="text-end mt-3 mb-2"
            >
              من محمد لبافی هستم؛ آموزگار، طراح، برنامه‌نویس و توسعه‌دهنده ارشد وب (Senior MERN Stack Developer).  چند سالی است در حوزه طراحی و توسعه وب و سامانه‌های آموزشی فعالیت می‌کنم و تجربه همکاری در پروژه‌های مختلف آموزشی و فناوری را دارم.
            </p>

            <p
  style={{
    fontSize: "15px",
    color: "#464749",
    lineHeight: "1.9",
    fontFamily: "KalamehWeb-Medium",
  }}
  className="text-end mt-3 mb-2"
>
  دغدغه من همواره بهبود کیفیت تدریس، تسهیل فرآیندهای آموزشی برای معلمان و همچنین ارتقاء تجربه یادگیری برای دانش‌آموزان بوده است. به همین دلیل سامانه همیار دبستان شهید جهان آرا را طراحی کردم تا علاوه بر کمک به معلمان در مدیریت کلاس و تولید محتوای آموزشی، دانش‌آموزان نیز بتوانند ساده‌تر و سریع‌تر به منابع درسی و محتوای آموزشی مورد نیاز خود دسترسی پیدا کنند.
</p>


<p
  style={{
    fontSize: "15px",
    color: "#464749",
    lineHeight: "1.9",
    fontFamily: "KalamehWeb-Medium",
  }}
  className="text-end mt-3 mb-2"
>
  این سامانه با ارائه امکاناتی نظیر مشاهده کتاب‌های درسی، نمونه سؤالات امتحانی، طرح درس‌های سالانه و روزانه، محتوای آموزشی و درس‌نامه‌های تفکیک‌شده به ازای هر پایه، تلاش می‌کند هم کار معلمان را تسهیل کند و هم فرآیند یادگیری برای دانش‌آموزان را جذاب‌تر و اثربخش‌تر سازد.
</p>
  <p
    style={{
      fontSize: "15px",
      color: "#464749",
      lineHeight: "1.9",
      fontFamily: "KalamehWeb-Medium",
    }}
    className="text-end mt-3 mb-2"
  >
    همچنین در کنار سامانه همیار، سامانه یادگیری مستمر دبستان شهید جهان‌آرا نیز به‌عنوان بستری آموزشی ویژه معلمان این مدرسه راه‌اندازی شده است. این سامانه با هدف توسعه حرفه‌ای معلمان و ارتقای مهارت‌های تدریس، دوره‌های آموزشی ضمن خدمت را به‌صورت ساختاریافته و کاربردی ارائه می‌دهد. معلمان می‌توانند از طریق این سامانه به جدیدترین روش‌های تدریس، محتوای آموزشی نوین و ابزارهای کمک آموزشی دسترسی داشته باشند و سطح کیفی آموزش را به‌طور مستمر ارتقاء دهند.
  </p>


            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Medium",
              }}
              className="text-end mt-3 mb-2"
            >
              باور دارم فناوری، اگر به‌درستی به خدمت آموزش درآید، می‌تواند تحول بزرگی در مدارس و نظام آموزشی ایجاد کند. امیدوارم سامانه همیار، سهم کوچکی در این مسیر داشته باشد.
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Medium",
              }}
              className="text-start mt-3 mb-1"
            >
              با احترام
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Medium",
              }}
              className="text-start mb-1"
            >
              محمد لبافی
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Medium",
              }}
              className="text-start mt-1 mb-1"
            >
              پاییز ۱۴۰۳
            </p>
            <div className="d-flex flex-column align-items-center pb-4 border-bottom w-100">
{/* <button style={{width:"250px"}} className="btn btn-danger mt-3 mb-2">
    🔗 <Link className="text-white" style={{fontSize: "12px", fontFamily: "KalamehWeb-Bold" }} href="/hamyar/developer/itemCreator">
      تولیدکننده کد JSON
    </Link>
  </button> */}
  <button style={{width:"100%"}} className="btn-main-2 mt-3">
    📑 <a className="text-white" style={{fontSize: "12px", fontFamily: "KalamehWeb-Bold" }} href="https://github.com/mohammad-lbf" target="_blank">
      مشاهده صفحه GitHub توسعه دهنده
    </a>
  </button>
</div>
            {/* مهارت‌ها */}
            <Skills />
          </div>
        </div>
      </div>
      </HamyarLayout>
    </>
  );
};

export default AboutDeveloper;
