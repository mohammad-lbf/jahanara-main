import HamyarLayout from '@/components/layout/HamyarLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Books = () => {

    return (
<HamyarLayout>
<div style={{minHeight:"100vh"}} className='page-padding-tops'>
                <div style={{marginTop:"50px" , paddingTop:"50px" , paddingBottom:"50px" , boxShadow: "2px 2px 15px rgba(0, 123, 255, 0.64) , -2px -2px 15px rgba(217, 0, 255, 0.64) "  }} className='container bg-white rounded border'>
                    <div className='row align-items-center'>
                            <div className='col-12 col-lg-7'>
                                <h2 className='text-center text-lg-end' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>
                                    کتابهای درسی | سامانه همیار دبستان شهید جهان‌آرا
                                </h2>
                                <p
                                className='mt-3 mb-4 mb-lg-0 text-center text-lg-end' 
                                style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.6rem"}}>برای دریافت جدیدترین ویرایش کتابهای درسی پایه خود، روی پایه مورد نظر کلیک کنید</p>
                            </div>
                            <div className='col-12 col-lg-5 text-center text-lg-start'>
                                    <Image alt='books' style={{width:"100px" , height:"100px"}} src={"/images/components/modules/books.png"} height={512} width={512} />
                            </div>
                    </div>
                </div>
                <div style={{marginTop:"50px"}} className='container mb-4'>
                <div className='row align-items-center justify-content-center'>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div
                                      className="bg-white rounded border d-flex flex-column align-items-center mb-3"
                                      style={{
                                        width: "300px",
                                        height: "185px",
                                        boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",
                                        background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)",
                                      }}
                                    >
                                    <Link className='py-3 text-center' style={{width:"300px" , height:"185px"}} href={"/hamyar/sevom/books"}>
                                        <Image alt='book' style={{width:"100px" , height:"100px" }} src={"/images/components/modules/number-3.png"} width={512} height={512} />
                                        <p className='mt-4' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>کتابهای درسی پایه سوم</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div
                                      className="bg-white rounded border d-flex flex-column align-items-center mb-3"
                                      style={{
                                        width: "300px",
                                        height: "185px",
                                        boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",
                                        background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)",
                                      }}
                                    >
                                    <Link className='py-3 text-center' style={{width:"300px" , height:"185px"}} href={"/hamyar/chaharom/books"}>
                                        <Image alt='book' style={{width:"100px" , height:"100px" }} src={"/images/components/modules/number-4.png"} width={512} height={512} />
                                        <p className='mt-4' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>کتابهای درسی پایه چهارم</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div
                                      className="bg-white rounded border d-flex flex-column align-items-center mb-3"
                                      style={{
                                        width: "300px",
                                        height: "185px",
                                        boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",
                                        background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)",
                                      }}
                                    >
                                    <Link className='py-3 text-center' style={{width:"300px" , height:"185px"}} href={"/hamyar/panjom/books"}>
                                        <Image alt='book' style={{width:"100px" , height:"100px" }} src={"/images/components/modules/number-5.png"} width={512} height={512} />
                                        <p className='mt-4' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>کتابهای درسی پایه پنجم</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div
                                      className="bg-white rounded border d-flex flex-column align-items-center mb-3"
                                      style={{
                                        width: "300px",
                                        height: "185px",
                                        boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",
                                        background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)",
                                      }}
                                    >
                                    <Link className='py-3 text-center' style={{width:"300px" , height:"185px"}} href={"/hamyar/sheshom/books"}>
                                        <Image alt='book' style={{width:"100px" , height:"100px" }} src={"/images/components/modules/number-6.png"} width={512} height={512} />
                                        <p className='mt-4' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>کتابهای درسی پایه ششم</p>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
</HamyarLayout>
    );
};

export default Books;