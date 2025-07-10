import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HamyarLayout from '@/components/layout/HamyarLayout';

const Books = () => {

    
    return (
<HamyarLayout>
<div style={{minHeight:"100vh"}} className='page-padding-tops'>
                <div style={{marginTop:"50px" , paddingTop:"50px" , paddingBottom:"50px"}} className='container bg-white rounded shadow border'>
                    <div className='row align-items-center'>
                            <div className='col-12 col-lg-7'>
                                <h2 className='text-center text-lg-end' style={{fontSize:"25px" ,lineHeight:"40px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>
                                    کتابهای درسی پایه پنجم | سامانه همیار دبستان شهید جهان آرا
                                </h2>
                                <p
                                className='mt-3 mb-4 mb-lg-0 text-center text-lg-end' 
                                style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.6rem"}}>برای دریافت فایل کتاب، روی دریافت فایل کلیک کنید</p>
                            </div>
                            <div className='col-12 col-lg-5 text-center text-lg-start'>
                                    <Image style={{width:"100px" , height:"100px"}} src={"/images/hamyar/components/modules/books.png"} height={512} width={512} />
                            </div>
                    </div>
                </div>
                <div style={{marginTop:"50px"}} className='container mb-4'>
                <div className='row align-items-center justify-content-center'>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/panjom/farsi.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>فارسی پنجم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/farsi_panjom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/panjom/riazi.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>ریاضی پنجم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/riazi_panjom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/panjom/oloom.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>علوم پنجم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/oloom-panjom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/panjom/quran.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>قرآن پنجم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/ghoran_panjom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/panjom/negaresh.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>نگارش پنجم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/negaresh_panjom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/panjom/motaleat.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>مطالعات اجتماعی پنجم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/motaleat-panjom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/panjom/hedye.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}> هدیه های آسمان پنجم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/hediyeha_panjom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
</HamyarLayout>
    );
};

export default Books;