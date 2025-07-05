import Skills from '@/components/modules/Skills';
import React from 'react';

const AboutDeveloper = () => {
    return (
        <div className="container page-padding-tops">
        <div className='pt-4 mt-2 mb-2 row justify-content-center'>
              <div className='col-12 col-sm-10 py-4 border my-4 rounded bg-white shadow-sm'>
              <h5 style={{fontSize:"24px",color:"#464749" , 
                  fontFamily:"KalamehWeb-Bold"}} 
                  className='text-center my-4 pb-2'>
                  درباره توسعه دهنده
              </h5>
              <p style={{fontSize:"17px",color:"#464749" , 
                  fontFamily:"KalamehWeb-Bold"}} 
                  className='text-end my-4'>
                نام و نام خانوادگی توسعه دهنده: محمد لبافی
              </p>
              <p style={{fontSize:"15px",color:"#464749" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-4 mb-2' >
                همکاران گرامی دبستان شهید جهان آراء
              </p>
              <p style={{fontSize:"15px",color:"#464749" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end my-2' >
                با سلام و احترام
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-3 mb-2' >
                سامانه یادگیری مستمر دبستان شهید جهان‌آرا بستری آموزشی ویژه معلمان این مدرسه است که با هدف توسعه حرفه‌ای و ارتقای مهارت‌های آموزشی طراحی شده است. این سامانه دوره‌های آموزشی ضمن خدمت را به‌صورت ساختاریافته و کاربردی ارائه می‌دهد تا معلمان بتوانند به دانش و روش‌های نوین تدریس دسترسی داشته باشند و سطح کیفی آموزش را بهبود بخشند.
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-3 mb-2' >
                    در این سامانه، دوره‌های متنوعی در زمینه‌های روش‌های تدریس خلاق، مدیریت کلاس، روان‌شناسی یادگیری، فناوری‌های آموزشی و سایر موضوعات مرتبط ارائه می‌شود. هر دوره شامل محتوای آموزشی چندرسانه‌ای، منابع تکمیلی، ارزیابی‌های مستمر و امکان دریافت گواهینامه پایان دوره است.
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-3 mb-2' >
                   سامانه یادگیری مستمر دبستان شهید جهان‌آرا فرصتی ارزشمند برای معلمان این مدرسه فراهم می‌کند تا در محیطی پویا و تعاملی، دانش و تجربیات خود را به‌روز کنند و با بهره‌گیری از شیوه‌های نوین، تأثیرگذاری بیشتری در فرآیند یادگیری دانش‌آموزان داشته باشند.
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-start mt-3 mb-1'>
                با تشکر
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-start mb-1'>
                محمد لبافی
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-start mt-1 mb-1'>
                    بهار 1404
              </p>
              <Skills />
              </div>
        </div>
      </div>
    );
};

export default AboutDeveloper;