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
        <title>درباره توسعه‌دهنده سامانه همیار معلم | محمد لبافی | jahanaraschool.ir</title>
        <meta
          name="description"
          content="محمد لبافی، آموزگار و توسعه‌دهنده ارشد وب (Senior MERN Stack Developer)، طراح و برنامه‌نویس سامانه همیار معلم دبستان شهید جهان‌آرا است که این سامانه را برای تسهیل آموزش معلمان و دانش‌آموزان طراحی کرده است."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="محمد لبافی" />
        <meta
          name="keywords"
          content="محمد لبافی, توسعه‌دهنده وب, سامانه همیار معلم, MERN Stack Developer, برنامه نویس Next.js, دبستان شهید جهان آرا"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:title"
          content="درباره توسعه‌دهنده سامانه همیار معلم | محمد لبافی | jahanaraschool.ir"
        />
        <meta
          property="og:description"
          content="محمد لبافی، آموزگار و توسعه‌دهنده ارشد وب (Senior MERN Stack Developer)، طراح و برنامه‌نویس سامانه همیار معلم دبستان شهید جهان‌آرا است که این سامانه را برای تسهیل آموزش معلمان و دانش‌آموزان طراحی کرده است."
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
          content="درباره توسعه‌دهنده سامانه همیار معلم | محمد لبافی | jahanaraschool.ir"
        />
        <meta
          name="twitter:description"
          content="محمد لبافی، آموزگار و توسعه‌دهنده ارشد وب (Senior MERN Stack Developer)، طراح و برنامه‌نویس سامانه همیار معلم دبستان شهید جهان‌آرا است که این سامانه را برای تسهیل آموزش معلمان و دانش‌آموزان طراحی کرده است."
        />
        <meta
          name="twitter:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />
      </Head>
      <HamyarLayout>
      <div className="container page-padding-tops">
        <div className="pt-4 mt-2 mb-2 row justify-content-center">
          <div className="col-12 col-sm-10 py-4 border my-4 rounded bg-white shadow-sm">
            <h5
              style={{
                fontSize: "24px",
                color: "#464749",
                fontFamily: "KalamehWeb-Bold",
              }}
              className="text-center my-4 pb-2"
            >
              درباره توسعه‌دهنده
            </h5>

            {/* عکس پرسونال */}
            <div className="text-center mb-4">
              <Image
                src="/images/20220719_222926.jpg"
                alt="محمد لبافی"
                width={1280}
                height={1280}
                className="shadow border"
                style={{ borderRadius: "50%" , width:"160px" , height:"160px" }}
              />
            </div>

            {/* توضیحات شخصی‌تر */}
            <p
              style={{
                fontSize: "17px",
                color: "#464749",
                fontFamily: "KalamehWeb-Bold",
              }}
              className="text-center my-4"
            >
              نام و نام خانوادگی توسعه‌دهنده: محمد لبافی
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                fontFamily: "KalamehWeb-Medium",
              }}
              className="text-end mt-4 mb-2"
            >
              همکاران و دانش‌آموزان عزیز دبستان شهید جهان آرا
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "#464749",
                fontFamily: "KalamehWeb-Medium",
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
  دغدغه من همواره بهبود کیفیت تدریس، تسهیل فرآیندهای آموزشی برای معلمان و همچنین ارتقاء تجربه یادگیری برای دانش‌آموزان بوده است. به همین دلیل سامانه همیار معلم دبستان شهید جهان آرا را طراحی کردم تا علاوه بر کمک به معلمان در مدیریت کلاس و تولید محتوای آموزشی، دانش‌آموزان نیز بتوانند ساده‌تر و سریع‌تر به منابع درسی و محتوای آموزشی مورد نیاز خود دسترسی پیدا کنند.
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
    همچنین در کنار سامانه همیار معلم، سامانه یادگیری مستمر دبستان شهید جهان‌آرا نیز به‌عنوان بستری آموزشی ویژه معلمان این مدرسه راه‌اندازی شده است. این سامانه با هدف توسعه حرفه‌ای معلمان و ارتقای مهارت‌های تدریس، دوره‌های آموزشی ضمن خدمت را به‌صورت ساختاریافته و کاربردی ارائه می‌دهد. معلمان می‌توانند از طریق این سامانه به جدیدترین روش‌های تدریس، محتوای آموزشی نوین و ابزارهای کمک آموزشی دسترسی داشته باشند و سطح کیفی آموزش را به‌طور مستمر ارتقاء دهند.
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
              باور دارم فناوری، اگر به‌درستی به خدمت آموزش درآید، می‌تواند تحول بزرگی در مدارس و نظام آموزشی ایجاد کند. امیدوارم سامانه همیار معلم، سهم کوچکی در این مسیر داشته باشد.
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
