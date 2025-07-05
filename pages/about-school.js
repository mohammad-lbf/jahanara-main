import Head from "next/head";
import Image from "next/image";
import React from "react";

import ContactInfo from "@/components/modules/HomePage/ContactInfo";
import HonorsBoard from "@/components/modules/HomePage/HonorsBoard";
import Teachers from "@/components/modules/Teachers";
import { useRouter } from "next/router";

const AboutSchool = () => {
  const router = useRouter();
  const canonicalUrl = `https://jahanaraschool.ir${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <>
      <Head>
        <title>درباره دبستان شهید جهان‌آرا | jahanaraschool.ir</title>

        <meta
          name="description"
          content="آشنایی با دبستان دولتی پسرانه شهید جهان‌آرا، یکی از مدارس برتر منطقه ۱۲ تهران، محیطی امن و پویا برای رشد علمی، تربیتی و فرهنگی دانش‌آموزان."
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="محمد لبافی" />

        <meta
          name="keywords"
          content="درباره مدرسه شهید جهان آرا, دبستان دولتی تهران, مدرسه پسرانه, آموزش ابتدایی, معلمان دبستان شهید جهان‌آرا"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href={canonicalUrl} />

        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:title"
          content="درباره دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          property="og:description"
          content="آشنایی با دبستان شهید جهان‌آرا، محیطی امن و پویا برای رشد علمی و تربیتی دانش‌آموزان در منطقه ۱۲ تهران."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta
          property="og:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="درباره دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          name="twitter:description"
          content="آشنایی با دبستان شهید جهان‌آرا، محیطی امن و پویا برای رشد علمی و تربیتی دانش‌آموزان در منطقه ۱۲ تهران."
        />
        <meta
          name="twitter:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />
      </Head>

      <main className="container page-padding-tops pb-4">
        <div className="pt-4 mt-2 mb-2 row justify-content-center">
          <div className="col-12 col-sm-10 py-4 border my-4 rounded bg-white shadow-sm">
            <h5
              className="text-center my-4 pb-2"
              style={{
                fontSize: "24px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Bold",
              }}
            >
              درباره دبستان دولتی پسرانه شهید جهان‌آرا
            </h5>

            <p
              className="text-justify my-4"
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Bold",
                direction: "rtl",
                textAlign: "justify",
              }}
            >
              دبستان دولتی پسرانه شهید جهان‌آرا، یکی از مدارس برجسته و فعال در منطقه ۱۲ تهران است که با فراهم آوردن محیطی امن و دوستانه، نقش مهمی در ارتقای کیفیت آموزش ابتدایی ایفا می‌کند. این مدرسه با پذیرش دانش‌آموزان در پایه‌های سوم، چهارم، پنجم و ششم، تلاش می‌کند تا با ارائه برنامه‌های آموزشی و پرورشی متنوع، زمینه پیشرفت علمی و تربیتی دانش‌آموزان را فراهم کند. هدف اصلی مدرسه، تربیت افرادی مسئولیت‌پذیر، خلاق و اخلاق‌مدار است که بتوانند در آینده نقش مؤثری در جامعه ایفا کنند.
            </p>

            <div className="text-center">
              <Image
                className="rounded shadow"
                src="/images/components/modules/IMG_۲۰۲۴۱۱۲۲_۱۱۵۹۰۵-min.jpg"
                width={720}
                height={751}
                alt="دبستان شهید جهان‌آرا"
                style={{ width: "200px", height: "200px" }}
              />
              <HonorsBoard />
            </div>

            <p
              className="mt-4 mb-2"
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Medium",
                direction: "rtl",
                textAlign: "justify",
              }}
            >
              یکی از ویژگی‌های برجسته دبستان شهید جهان‌آرا، بهره‌گیری از کادر آموزشی مجرب و دلسوز است که با استفاده از روش‌های نوین تدریس، به یادگیری عمیق‌تر و مؤثرتر دانش‌آموزان کمک می‌کنند. کلاس‌های مجهز، فضای دوستانه و برنامه‌های مکملی چون فعالیت‌های فرهنگی، هنری و ورزشی از جمله امکاناتی هستند که این مدرسه را به محیطی جذاب برای دانش‌آموزان تبدیل کرده‌اند. توجه به استعدادهای فردی هر دانش‌آموز و پرورش آن‌ها یکی از اولویت‌های این مدرسه است.
            </p>

            <Teachers />

            <div className="text-center">
              <Image
                className="rounded shadow"
                src="/images/components/modules/IMG_۲۰۲۴۱۱۲۲_۱۱۵۹۱۹-min.jpg"
                width={720}
                height={526}
                alt="فضای مدرسه شهید جهان‌آرا"
                style={{ width: "200px", height: "200px" }}
              />
            </div>

            <p
              className="my-2"
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Medium",
                direction: "rtl",
                textAlign: "justify",
              }}
            >
              این مدرسه در نزدیکی میدان خراسان واقع شده و به دلیل موقعیت مکانی مناسب، دسترسی آسانی برای خانواده‌ها فراهم آورده است. آدرس دقیق مدرسه به این شرح است: میدان خراسان، خیابان خراسان، خیابان لرزاده، بعد از درمانگاه خیریه شهدای لرزاده، پلاک ۲۶. کدپستی مدرسه ۱۱۷۷۹۳۵۳۱۱ است. این موقعیت جغرافیایی باعث شده که دبستان شهید جهان‌آرا به یکی از گزینه‌های محبوب خانواده‌های این منطقه تبدیل شود.
            </p>

            <div className="text-center">
              <Image
                className="rounded shadow"
                src="/images/components/modules/IMG_۲۰۲۴۱۱۲۲_۱۱۵۹۳۶-min.jpg"
                width={720}
                height={513}
                alt="کلاس های مدرسه شهید جهان‌آرا"
                style={{ width: "200px", height: "200px" }}
              />
            </div>

            <p
              className="mt-3 mb-2"
              style={{
                fontSize: "15px",
                color: "#464749",
                lineHeight: "1.9",
                fontFamily: "KalamehWeb-Medium",
                direction: "rtl",
                textAlign: "justify",
              }}
            >
              در کنار امکانات آموزشی، دبستان شهید جهان‌آرا توجه ویژه‌ای به برقراری ارتباط نزدیک با خانواده‌ها دارد و با برگزاری جلسات منظم اولیا و مربیان، خانواده‌ها را در جریان پیشرفت تحصیلی و تربیتی فرزندانشان قرار می‌دهد. همچنین، این دبستان با استفاده از تلفن‌های تماس ۳۳۵۴۳۱۴۱ و ۳۳۵۴۴۰۰۶، همواره آماده پاسخگویی به سوالات و نیازهای والدین است. دبستان شهید جهان‌آرا با افتخار مسیر رشد و تعالی فرزندان شما را هموار می‌سازد.
            </p>

            <ContactInfo />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutSchool;
