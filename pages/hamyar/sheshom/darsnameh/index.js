import Image from 'next/image';
import React, { useState } from 'react';
import data from '@/DB/Hamyar DB/sheshom/darsnameh/index';
import Card from '@/components/modules/Hamyar modules/components/modules/Card';
import styles from '../../../../styles/filterselect.module.css';
import HamyarLayout from '@/components/layout/HamyarLayout';

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

  // شمارش موارد برای هر گزینه
  const countByBook = data.reduce((acc, item) => {
    acc[item.book] = (acc[item.book] || 0) + 1;
    return acc;
  }, {});

  const countByCreator = data.reduce((acc, item) => {
    acc[item.creator] = (acc[item.creator] || 0) + 1;
    return acc;
  }, {});

  // ساخت ناوبری صفحه
  const renderPagination = () => (
    <div className='container'>
      <div className='row justify-content-center flex-column align-items-center'>
      <div className=' text-center bg-white p-3 rounded border mb-3' style={{width:"fit-content"}}> 
     حداکثر تعداد نمایش در هر صفحه: 10
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
              {i + 1}
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
              درسنامه های آموزشی پایه ششم
            </h2>
          </div>
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <Image className="mt-3 mt-lg-0" style={{ width: "50px", height: "50px" }} src={"/images/components/modules/number-6.png"} height={512} width={512} />
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
                <select
                  id="filter"
                  className={styles.selectBox}
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option value="all">همه دروس ({data.length})</option>
                  <option value="quran">آموزش قرآن ({countByBook.quran || 0})</option>
                  <option value="riazi">ریاضی ({countByBook.riazi || 0})</option>
                  <option value="oloom">علوم ({countByBook.oloom || 0})</option>
                  <option value="farsi">فارسی ({countByBook.farsi || 0})</option>
                  <option value="hedye">هدیه های آسمان ({countByBook.hedye || 0})</option>
                  <option value="motaleat">مطالعات اجتماعی ({countByBook.motaleat || 0})</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className={styles.container}>
              <div className={styles.formGroup} style={{ backgroundColor: "rgb(13, 209, 143)" }}>
                <label style={{ fontFamily: "KalamehWeb-Bold" }} htmlFor="creator-filter" className={styles.label}>
                  انتخاب طراح:
                </label>
                <select
                  id="creator-filter"
                  className={styles.selectBox}
                  value={selectedCreator}
                  onChange={handleCreatorChange}
                >
                  <option value="all">همه طراحان ({data.length})</option>
                  <option value="جناب آقای لبافی">جناب آقای لبافی ({countByCreator["جناب آقای لبافی"] || 0})</option>
                </select>
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
