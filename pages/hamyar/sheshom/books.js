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
                                <h2 className='text-center text-lg-end' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>
                                    کتابهای درسی پایه ششم | سامانه همیار دبستان شهید جهان آرا
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
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/farsi.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>فارسی ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/farsi_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/riazi.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>ریاضی ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/riaze_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/oloom.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>علوم ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/oloom_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/quran.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>قرآن ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/ghoran_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/negaresh.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>نگارش ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/negaresh_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/motaleat.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>مطالعات اجتماعی ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/motaleat_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/hedye.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}> هدیه های آسمان ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/hediyeha_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/karvafanavari.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}> کار و فناوری ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/683153346kar%20v%20fanavare_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/hamyar/components/modules/books/sheshom/tafakor.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}> تفکر و پژوهش ششم</p>
                                        <a className='btn-main-2 text-white mt-0' href="https://dl.heyvagroup.com/admin/Files/upload/tafakor%20v%20pazhohesh_sheshom.pdf" download>دریافت فایل کتاب</a>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
            </HamyarLayout>
    );
};

export default Books;