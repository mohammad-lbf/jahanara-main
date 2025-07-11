import Image from 'next/image';
import React, { useState } from 'react';
import data from '@/DB/Hamyar DB/chaharom/mohtava';
import Card from '@/components/modules/Hamyar modules/components/modules/Card';
import styles from '../../../../styles/filterselect.module.css';
import HamyarLayout from '@/components/layout/HamyarLayout';
import toPersianNumber from '@/assets/functions/ToPersianNumber';
import CountByBook from '@/components/modules/Hamyar modules/components/modules/CountByBook';
import CountByCreator from '@/components/modules/Hamyar modules/components/modules/CountByCreator';


const Soalat = () => {
  const reverseData = [...data].reverse();

  // State برای فیلترها و صفحه‌بندی
  const [selectedOption, setSelectedOption] = useState('all');
  const [selectedCreator, setSelectedCreator] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10; // تعداد موارد در هر صفحه

  // مدیریت تغییر فیلتر درس
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setCurrentPage(1); // بازگشت به صفحه اول هنگام تغییر فیلتر
  };

  // مدیریت تغییر فیلتر سازنده
  const handleCreatorChange = (e) => {
    setSelectedCreator(e.target.value);
    setCurrentPage(1); // بازگشت به صفحه اول هنگام تغییر فیلتر
    
  };

  // فیلتر داده‌ها
  const filteredData = reverseData.filter(item => {
    const bookMatch = selectedOption === 'all' || item.book === selectedOption;
    const creatorMatch = selectedCreator === 'all' || item.creator === selectedCreator;
    return bookMatch && creatorMatch;
  });

  // داده‌های صفحه فعلی
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // تعداد کل صفحات
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // تغییر صفحه
  const handlePageChange = (page) => {
    setCurrentPage(page);
  window.scrollTo({
    top: 450, // مختصات عمودی
    behavior: 'smooth', // اسکرول روان
  });
  };


  // ساخت ناوبری صفحه
  const renderPagination = () => (
    <div className='container'>
      <div className='row justify-content-center flex-column align-items-center'>
        <div className='text-center bg-white p-3 rounded border mb-3' style={{ width: "fit-content" }}>
          حداکثر تعداد نمایش در هر صفحه: {toPersianNumber(itemsPerPage)}
          <nav aria-label="" className='mt-2'>
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <a
                    className="page-link mb-1"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(i + 1);
                    }}
                  >
                    {toPersianNumber(i + 1)}
                  </a>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                  }}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );

  return (
<HamyarLayout>
<div style={{ minHeight: "100vh" }} className="page-padding-tops">
      <div style={{ marginTop: "50px", paddingTop: "20px", paddingBottom: "20px" }} className="container bg-white rounded shadow border">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <h2 className="text-center text-lg-end mb-3 mb-lg-0" style={{ fontSize: "25px", fontFamily: "KalamehWeb-Bold", color: "#03004e" }}>
              محتوا های آموزشی پایه چهارم
            </h2>
          </div>
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <Image className="mt-3 mt-lg-0" style={{ width: "50px", height: "50px" }} src={"/images/hamyar/components/modules/number-4.png"} height={512} width={512} />
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
        <div className="text-center px-2" style={{margin:"50px 0"}}>
          <p style={{ fontFamily: "KalamehWeb-Bold", fontSize: "18px", color: "red" , lineHeight:"1.9" }}>
            موردی مرتبط با فیلترهای وارد شده یافت نشد.
          </p>
        </div>
      ) : (
        <>
          {renderPagination()}
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {currentData.map((item) => (
                <div key={item.id} className="col d-flex justify-content-center">
                  <Card caption={item.caption} fileType={item.fileType} name={item.name} image={item.image} creator={item.creator} slug={item.slug} />
                </div>
              ))}
            </div>
          </div>
          {renderPagination()}
        </>
      )}
    </div>
</HamyarLayout>
  );
  
};

export default Soalat;
