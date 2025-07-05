import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import GrammerTestLevels from './';

const CourseAsideSection = ({courseName , courseVideos , courseTime}) => {
    return (
        <div  className='flex-column w-100 align-items-center pt-0 d-flex shadow-sm bg-white mb-lg-3 mb-2 p-3 rounded border'>
        {/* //   <span
        //   style={{fontSize:"17px" , color:"#464749" , 
        //   fontFamily:"KalamehWeb-Medium" , }} 
        //   className='text-center bg-light mt-4 pt-2 pb-2 p-3 border rounded-pill shadow-sm'>اطلاعات دوره</span> */}
          <span
          style={{fontSize:"17px" , color:"#464749" , 
          fontFamily:"KalamehWeb-Medium" , }} 
          className='text-center bg-primary text-white mt-4 pt-2 mb-2 pb-2 p-3 border rounded-pill shadow-sm'>{courseName}</span>

            <div className='d-flex border-bottom mt-2 border-top py-3'>
            {/* <div style={{width:"100%"}} className="lbf-after-card-img my-0 mt-1 mb-3 mx-auto mx-lg-0"></div> */}
            <div style={{width:"80px" , height:"100px"}} className='d-flex border rounded shadow-sm flex-column justify-content-center align-items-center'>
            <i class="bi bi-person fs-3 mb-2"></i>
            <span className='text-secondary' style={{fontFamily:"Vazirmatn" , fontSize:"13px", textWrap:"nowrap"}}>مدرس دوره</span>
            <span className=' mt-2 fw-bold' style={{fontFamily:"Vazirmatn" , fontSize:"13px", textWrap:"nowrap"}}>محمد لبافی</span>
            </div>
            <div style={{width:"80px" , height:"100px"}} className='d-flex mx-2 mx-md-3 mx-lg-4 border rounded shadow-sm px-2 py-3 flex-column justify-content-center align-items-center'>
            <i class="bi bi-clock-history fs-3 mb-2"></i>
            <span className='text-secondary' style={{fontFamily:"Vazirmatn" , fontSize:"13px" , textWrap:"nowrap"}}>مدت دوره</span>
            <span className=' mt-2 fw-bold' style={{fontFamily:"Vazirmatn" , fontSize:"13px", textWrap:"nowrap"}}>{courseTime}</span>
            </div>
            <div style={{width:"80px" , height:"100px"}} className='d-flex border rounded shadow-sm px-2 py-3 flex-column justify-content-center align-items-center'>
            <i class="bi bi-film fs-3 mb-2"></i>
            <span className='text-secondary' style={{fontFamily:"Vazirmatn" , fontSize:"13px", textWrap:"nowrap"}}>تعداد ویدیو</span>
            <span className=' mt-2 fw-bold' style={{fontFamily:"Vazirmatn" , fontSize:"13px", textWrap:"nowrap"}}>{courseVideos}</span>
            </div>
            </div>
            <div className='d-flex justify-content-between w-100 bg-success-subtle border p-3 shadow-sm mt-3'>
            <span className='text-secondary' style={{fontFamily:"Vazirmatn" , fontSize:"15px", textWrap:"nowrap"}}>وضعیت دوره</span>
            <span className='' style={{fontFamily:"Vazirmatn" , fontSize:"17px", textWrap:"nowrap"}}>کامل شده</span>
            </div>
            <div className='d-flex justify-content-between w-100 bg-primary-subtle border p-3 shadow-sm mt-3'>
            <span className='text-secondary' style={{fontFamily:"Vazirmatn" , fontSize:"15px", textWrap:"nowrap"}}>قیمت دوره</span>
            <span className='' style={{fontFamily:"Vazirmatn" , fontSize:"17px", textWrap:"nowrap"}}>رایگان</span>
            </div>

        </div>
    );
};

export default CourseAsideSection;