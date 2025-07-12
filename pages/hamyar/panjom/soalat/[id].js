import React from 'react'
import Head from 'next/head'
import data from '@/DB/Hamyar DB/panjom/soalat';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/modules/Hamyar modules/components/modules/Card';
import HamyarLayout from '@/components/layout/HamyarLayout';

export async function getStaticPaths() {
  const paths = data.map(item => ({
    params: { id: item.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const currentFileData = data.find(item => item.id.toString() === params.id);

  return {
    props: {
      currentFileData,
      data,
    }
  }
}

const Page = ({ currentFileData, data }) => {

  // ساخت متغیرهای سئو
  const pageTitle = `${currentFileData.name} | طراح: ${currentFileData.creator} | سامانه همیار دبستان شهید جهان آرا`;
  const pageDescription = `دانلود ${currentFileData.name} طراحی شده توسط ${currentFileData.creator} در سامانه همیار دبستان شهید جهان آرا. ${currentFileData.caption}`;
  const pageKeywords = `نمونه سوالات, سوالات پایه پنجم, دبستان شهید جهان آرا, ${currentFileData.name}`;
  const canonicalUrl = `https://jahanaraschool.ir/hamyar/panjom/soalat/${currentFileData.id}`;

  return (
    <HamyarLayout>
      <Head>
        {/* Title */}
        <title>{pageTitle}</title>

        {/* Meta Description */}
        <meta name="description" content={pageDescription} />

        {/* Author */}
        <meta name="author" content={currentFileData.creator} />
        
        <meta name="robots" content="index, follow" />

        {/* Keywords */}
        <meta name="keywords" content={pageKeywords} />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="سامانه همیار دبستان شهید جهان آرا" />

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>

      <div style={{minHeight:"100vh"}} className='page-padding-tops'>
        <div style={{paddingTop:"20px" , paddingBottom:"20px"}} className='mt-5 mt-lg-2 container bg-white rounded shadow-sm border'>
          <div className='d-flex'>
            <Link href={"/hamyar"} style={{fontFamily:"KalamehWeb-Bold"}}>
              صفحه اصلی
            </Link>
            <i className="bi bi-chevron-left mx-2"></i>
            <Link href={"/hamyar/bases"} style={{fontFamily:"KalamehWeb-Bold"}}>
              پایه ها
            </Link>
            <i className="bi bi-chevron-left mx-2"></i>
            <Link href={"/hamyar/panjom"} style={{fontFamily:"KalamehWeb-Bold"}}>
              پنجم
            </Link>
            <i className="bi bi-chevron-left mx-2"></i>
            <Link href={"/hamyar/panjom/soalat"} style={{fontFamily:"KalamehWeb-Bold"}}>
              نمونه سوالات
            </Link>
          </div>
        </div>

        {
          currentFileData &&
          <>
            <div style={{marginTop:"10px" , paddingTop:"20px" , paddingBottom:"20px"}} className='mb-4 container bg-white rounded shadow-sm border'>
              <div>
                <div className='row justify-content-center justify-content-lg-start align-items-start'>
                  <div className='col-12 col-lg-2 d-flex justify-content-center justify-content-lg-start'>
                    <Image
                      style={{width:"180px" , height:"220px"}}
                      className='border'
                      src={currentFileData.image}
                      width={230}
                      height={320}
                      alt={currentFileData.name}
                    />
                  </div>
                  <div className='col-12 col-lg-10 d-flex flex-column align-items-center align-items-lg-start mt-3'>
                    <h2 className='mb-3' style={{fontFamily:"KalamehWeb-bold" , fontSize:"22px"}}>
                      {currentFileData.name}
                    </h2>
                    <p style={{fontFamily:"KalamehWeb-medium"}}>
                      {currentFileData.caption}
                    </p>
                    <div className='d-flex mt-3'>
                      <span className='bg-warning text-black rounded p-2'>
                        {currentFileData.boolInP}
                      </span>
                      <span className='bg-warning text-black rounded p-2 mx-2'>
                        {currentFileData.gradeInP}
                      </span>
                    </div>
                    <div className='bg-danger text-white rounded px-3 mt-2'>
                      <div className='d-flex justify-content-center align-items-center mt-3'>
                        <p>نوع فایل:</p>
                        {currentFileData.fileType == "PDF" && <i className="pb-2 bi bi-filetype-pdf text-white fs-5"></i>}
                        {currentFileData.fileType == "WORD" && <i className="pb-2 bi bi-file-earmark-word-fill text-white fs-5"></i>}
                        {currentFileData.fileType == "JPG" && <i className="pb-2 bi bi-card-image text-white fs-5"></i>}
                      </div>
                    </div>
                    <div className="mb-1 d-flex justify-content-center mt-3">
                      <i className="bi bi-pen-fill ms-1 text-black"></i>
                      <p style={{fontFamily:"KalamehWeb-Medium" , color:"#000"}}>
                        طراح: {currentFileData.creator}
                      </p>
                    </div>
                    <div className="mb-1 d-flex justify-content-center mt-3">
                      <i className="bi bi-calendar-check-fill ms-1 text-black"></i>
                      <p style={{fontFamily:"KalamehWeb-Medium" , color:"#000"}}>
                        بروزرسانی شده در: {currentFileData.upoledDate}
                      </p>
                    </div>

                    <a
                        download={true}
                        className='mt-3 btn-main-2 text-center d-inline-block text-white w-100 d-flex justify-content-center align-items-center'
                        style={{borderRadius:"0", fontFamily:"KalamehWeb-Bold"}}
                        href={`${currentFileData.src}`}
                      >
                        دریافت فایل
                        <i className="bi bi-download me-2 fs-5"></i>
                    </a>

                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='container'>
                <div style={{ paddingTop:"20px" , paddingBottom:"20px"}} className='mb-3 container bg-white rounded text-center shadow-sm border'>
                  <h2 style={{fontFamily:"KalamehWeb-Bold" , fontSize:"17px"}} className="text-center">
                    آخرین نمونه سوالات پایه پنجم
                  </h2>
                </div>
                <div className='row justify-content-center align-items-center'>
                  {
                    data.slice(-4).map(item => (
                      <div key={item.id} className='col d-flex justify-content-center'>
                        <Card
                          caption={item.caption}
                          fileType={item.fileType}
                          name={item.name}
                          image={item.image}
                          creator={item.creator}
                          slug={item.slug}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </HamyarLayout>
  )
}

export default Page;
