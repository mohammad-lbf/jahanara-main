import React from 'react';
import Head from 'next/head';
import darsnameh from '@/DB/Hamyar DB/chaharom/darsnameh';
import mohtava from '@/DB/Hamyar DB/chaharom/mohtava';
import soalat from '@/DB/Hamyar DB/chaharom/soalat';
import tarhedars from '@/DB/Hamyar DB/chaharom/tarhedars';
import HamyarLayout from '@/components/layout/HamyarLayout';
import Image from 'next/image';
import ToolsMenuOption from '@/components/modules/ToolsMenuOption';

export async function getStaticProps() {
  return {
    props: {
      soalatCount: soalat.length,
      tarhedarsCount: tarhedars.length,
      mohtavaCount: mohtava.length,
      darsnamehCount: darsnameh.length,
    },
  };
}

// تابع تبدیل عدد انگلیسی به فارسی
const toPersianNumber = (num) => {
  return num
    .toString()
    .replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

const Chaharom = ({ soalatCount, tarhedarsCount, mohtavaCount, darsnamehCount }) => {
  const canonicalUrl = `https://jahanaraschool.ir/hamyar/chaharom`;

  return (
    <HamyarLayout>
      <Head>
        <title>پایه چهارم دبستان | سامانه همیار دبستان شهید جهان آرا</title>
        <meta
          name="description"
          content="در این صفحه می‌توانید به محتوای آموزشی، سوالات، طرح درس و درسنامه‌های پایه چهارم دبستان شهید جهان‌آرا دسترسی پیدا کنید."
        />
        <meta name="keywords" content="پایه چهارم دبستان, سوالات چهارم ابتدایی, طرح درس چهارم ابتدایی, درسنامه چهارم دبستان, دبستان شهید جهان آرا" />
        <meta name="author" content="محمد لبافی" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />

        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:title" content="پایه چهارم دبستان | سامانه همیار دبستان شهید جهان آرا" />
        <meta property="og:description" content="دسترسی به ابزارها و محتوای آموزشی پایه چهارم دبستان شهید جهان‌آرا شامل سوالات، طرح درس، درسنامه و محتوای کمک‌درسی." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />

        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content="پایه چهارم دبستان | سامانه همیار دبستان شهید جهان آرا" />
        <meta name="twitter:description" content="دسترسی به ابزارها و محتوای آموزشی پایه چهارم دبستان شهید جهان‌آرا شامل سوالات، طرح درس، درسنامه و محتوای کمک‌درسی." />
      </Head>

      <div style={{ minHeight: "100vh" }} className='page-padding-tops'>
        <div
          style={{
            marginTop: "50px",
            paddingTop: "50px",
            paddingBottom: "50px",
            backgroundColor: "#fff",
            boxShadow: "1px 3px 15px 2px #4f0099",
          }}
          className='container rounded'
        >
          <div className='row align-items-center'>
            <div className='col-12 col-lg-7'>
              <h2
                className='text-center text-lg-end'
                style={{ fontSize: "25px", fontFamily: "KalamehWeb-Bold", color: "#4f0099" }}
              >
                پایه چهارم دبستان
              </h2>
              <p
                className='mt-3 mb-4 mb-lg-0 text-center text-lg-end'
                style={{ fontSize: "15px", fontFamily: "KalamehWeb-Medium", color: "#000", lineHeight: "1.6rem" }}
              >
                پایه چهارم دبستان | سامانه همیار معلم دبستان جهان آرا
              </p>
            </div>
            <div className='col-12 col-lg-5 text-center text-lg-start'>
              <Image
                style={{ width: "100px", height: "100px" }}
                src={"/images/hamyar/components/modules/number-4.png"}
                height={512}
                width={512}
                alt="پایه چهارم"
              />
            </div>
          </div>
        </div>

        <h3
          style={{ fontSize: "25px", fontFamily: "KalamehWeb-Bold", color: "#03004e" }}
          className='mb-4 text-center mt-4 pt-4'
        >
          ابزار های سامانه | پایه چهارم
        </h3>

        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0 d-flex justify-content-center'>
              <ToolsMenuOption type={"soalat"} number={toPersianNumber(soalatCount)} slug="/hamyar/chaharom/soalat" />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
              <ToolsMenuOption type={"tarhedars"} number={toPersianNumber(tarhedarsCount)} slug={"/hamyar/chaharom/tarhedars"} />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
              <ToolsMenuOption type={"mohtava"} number={toPersianNumber(mohtavaCount)} slug={"/hamyar/chaharom/mohtava"} />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
              <ToolsMenuOption type={"darsnameh"} number={toPersianNumber(darsnamehCount)} slug={"/hamyar/chaharom/darsnameh"} />
            </div>
          </div>
        </div>
      </div>
    </HamyarLayout>
  );
};

export default Chaharom;
