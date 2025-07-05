import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const FirstBanner = () => {
    return (
<div className="">
        <div className='pt-4'>
            <div className='container'>
                <div className='row align-items-center align-items-lg-start bg-white shadow-sm justify-content-center justify-content-lg-between p-4 mt-4 mt-lg-2'>
                    <div className='col-12 col-lg-6 text-center text-lg-end'>
                    <div className='d-flex flex-column justify-content-center justify-content-lg-start'>
                        <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"30px"}} className='pt-4 lh-lg'>دوره‌ها و کلاس‌های آموزشی سامانه یادگیری مستمر دبستان شهید جهان‌آرا</h3>
                        <div className='d-flex justify-content-center'>
                    <Image style={{borderRadius:"10px" , width:"250px" , height:"250px"}} className=' d-lg-none' alt='html-logo' width={450} height={450} src={'/images/components/modules/education-3d-icon-download-in-png-blend-fbx-gltf-file-formats--books-mortarboard-graduate-academy-study-college-pack-school-icons-6159657.webp'} />
                    </div>
                    </div>
                        <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"18px" , color:"#090736"}} className='mt-3'>یادگیری مؤثر و کاربردی مهارت‌های تدریس نوین</h3>
                        {/* <h3 style={{fontFamily:"KalamehWeb-Medium" , fontSize:"17px" , color:"#090736"}} className='mt-3'>تعیین سطح زبان چیست و دقیقا چه کاربردهایی دارد؟ </h3> */}
                            <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"17px" , color:"#000"}} className='text-center text-lg-end lh-lg my-3'>
                            با کلیک بر روی هر یک از دوره‌ها می‌توانید اطلاعات و جزئیات کامل آن دوره که شامل موضوعات, سرفصل‌ها, مدت زمان و نحوه ثبت نام می‌باشد را مشاهده کنید.
                            </p>
                            

                    </div>
                    <div className='col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end'>
                    <Image style={{borderRadius:"10px" , width:"250px" , height:"250px"}} className=' d-none d-lg-flex' alt='html-logo' width={450} height={450} src={'/images/components/modules/education-3d-icon-download-in-png-blend-fbx-gltf-file-formats--books-mortarboard-graduate-academy-study-college-pack-school-icons-6159657.webp'} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FirstBanner;