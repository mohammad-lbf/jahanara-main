import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Card from '@/components/modules/Hamyar modules/components/modules/Card';
import styles from '../../../../styles/filterselect.module.css';
import HamyarLayout from '@/components/layout/HamyarLayout';
import CountByBook from '@/components/modules/Hamyar modules/components/modules/CountByBook';
import CountByCreator from '@/components/modules/Hamyar modules/components/modules/CountByCreator';
import Pagination from '@/components/modules/Hamyar modules/components/modules/Pagination';

export async function getStaticProps() {
  const data = await import('@/DB/Hamyar DB/sheshom/mohtava');
  return {
    props: {
      data: data.default,
    },
  };
}

const Mohtava = ({ data }) => {
  const router = useRouter();
  const canonicalUrl = `https://jahanaraschool.ir${router.asPath === "/" ? "" : router.asPath}`;

  const reverseData = [...data].reverse();

  const [selectedOption, setSelectedOption] = useState('all');
  const [selectedCreator, setSelectedCreator] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setCurrentPage(1);
  };

  const handleCreatorChange = (e) => {
    setSelectedCreator(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = reverseData.filter(item => {
    const bookMatch = selectedOption === 'all' || item.book === selectedOption;
    const creatorMatch = selectedCreator === 'all' || item.creator === selectedCreator;
    return bookMatch && creatorMatch;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 450,
      behavior: 'smooth',
    });
  };

  return (
    <HamyarLayout>
      <Head>
        <title>محتواهای آموزشی پایه ششم | سامانه همیار دبستان شهید جهان آرا</title>
        <meta
          name="description"
          content="بانک محتوای آموزشی پایه ششم دبستان شهید جهان‌آرا شامل جزوه‌ها، فایل‌های کمک درسی و محتوای متنوع برای معلمان و دانش‌آموزان. فیلتر بر اساس درس یا طراح."
        />
        <meta name="keywords" content="محتوای آموزشی ششم دبستان, جزوه ششم دبستان, محتوای درسی ششم, دبستان شهید جهان آرا, همیار" />
        <meta name="author" content="محمد لبافی" />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:title" content="محتواهای آموزشی پایه ششم | سامانه همیار دبستان شهید جهان آرا" />
        <meta property="og:description" content="بانک محتوای آموزشی پایه ششم دبستان شهید جهان‌آرا شامل جزوه‌ها، فایل‌های کمک درسی و محتوای متنوع برای معلمان و دانش‌آموزان. فیلتر بر اساس درس یا طراح." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta name="twitter:title" content="محتواهای آموزشی پایه ششم | سامانه همیار دبستان شهید جهان آرا" />
        <meta name="twitter:description" content="بانک محتوای آموزشی پایه ششم دبستان شهید جهان‌آرا شامل جزوه‌ها، فایل‌های کمک درسی و محتوای متنوع برای معلمان و دانش‌آموزان. فیلتر بر اساس درس یا طراح." />

      </Head>

      <div style={{ minHeight: "100vh" }} className="page-padding-tops">
        <div style={{ marginTop: "50px", paddingTop: "20px", paddingBottom: "20px" }} className="container bg-white rounded shadow border">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <h2 className="text-center text-lg-end mb-3 mb-lg-0" style={{ fontSize: "25px", fontFamily: "KalamehWeb-Bold", color: "#03004e" }}>
                محتوا های آموزشی پایه ششم
              </h2>
            </div>
            <div className="col-12 col-lg-5 text-center text-lg-start">
              <Image className="mt-3 mt-lg-0" style={{ width: "50px", height: "50px" }} src={"/images/hamyar/components/modules/number-6.png"} height={512} width={512} alt="پایه ششم" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "0px", paddingTop: "20px" }} className="container mb-3 mt-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
              <div className={styles.container}>
                <div className={styles.formGroup}>
                  <label style={{ fontFamily: "KalamehWeb-Bold" }} htmlFor="filter" className={styles.label}>
                    انتخاب درس:
                  </label>
                  <CountByBook data={data} handleChange={handleChange} selectedOption={selectedOption} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className={styles.container}>
                <div className={styles.formGroup} style={{ backgroundColor: "rgb(13, 209, 143)" }}>
                  <label style={{ fontFamily: "KalamehWeb-Bold" }} htmlFor="creator-filter" className={styles.label}>
                    انتخاب طراح:
                  </label>
                  <CountByCreator data={data} handleChange={handleCreatorChange} selectedCreator={selectedCreator} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {filteredData.length === 0 ? (
          <div className="text-center px-2" style={{ margin: "50px 0" }}>
            <p style={{ fontFamily: "KalamehWeb-Bold", fontSize: "18px", color: "red", lineHeight: "1.9" }}>
              موردی مرتبط با فیلترهای وارد شده یافت نشد.
            </p>
          </div>
        ) : (
          <>
            <Pagination
              totalItems={filteredData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />

            <div className="container">
              <div className="row justify-content-center align-items-center">
                {currentData.map((item) => (
                  <div key={item.id} className="col d-flex justify-content-center">
                    <Card
                      caption={item.caption}
                      fileType={item.fileType}
                      name={item.name}
                      image={item.image}
                      creator={item.creator}
                      slug={item.slug}
                    />
                  </div>
                ))}
              </div>
            </div>

            <Pagination
              totalItems={filteredData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </HamyarLayout>
  );
};

export default Mohtava;
