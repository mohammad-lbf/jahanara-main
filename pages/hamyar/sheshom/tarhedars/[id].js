import React from 'react';
import { useRouter } from 'next/router';
import data from '@/DB/Hamyar DB/sheshom/tarhedars/index'
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/modules/Hamyar modules/components/modules/Card';
import HamyarLayout from '@/components/layout/HamyarLayout';

const Page = () => {
    const router = useRouter();
    const { id } = router.query;
    const currentFileData = data.find(item => item.id == id);
    console.log(id)
    return (
<HamyarLayout>
<div style={{minHeight:"100vh"}} className='page-padding-tops'>
            <div style={{marginTop:"50px" , paddingTop:"20px" , paddingBottom:"20px"}} className='mt-5 mt-lg-2 container bg-white rounded shadow-sm border'>
                <div className='d-flex'>
                <Link href={"/hamyar"} style={{fontFamily:"KalamehWeb-Bold"}}>
                    صفحه اصلی
                </Link>
                <i class="bi bi-chevron-left mx-2"></i>
                <Link href={"/hamyar/bases"} style={{fontFamily:"KalamehWeb-Bold"}}>
                    پایه ها
                </Link>
                <i class="bi bi-chevron-left mx-2"></i>
                <Link href={"/hamyar/sheshom"} style={{fontFamily:"KalamehWeb-Bold"}}>
                    ششم
                </Link>
                <i class="bi bi-chevron-left mx-2"></i>
                <Link href={"/hamyar/sheshom/tarhedars"} style={{fontFamily:"KalamehWeb-Bold"}}>
                    طرح درس
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
                                        <Image style={{width:"180px" , height:"220px"}} className='border' src={currentFileData.image} width={230} height={320} />
                                </div>
                                <div className='col-12 col-lg-10 d-flex flex-column align-items-center align-items-lg-start mt-3'>
                                        <h2 className='mb-3' style={{fontFamily:"KalamehWeb-bold" , fontSize:"22px"}}>{currentFileData.name}</h2>
                                        <p className='' style={{fontFamily:"KalamehWeb-medium"}}>
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
                                            {currentFileData.fileType == "PDF" && <i class="pb-2 bi bi-filetype-pdf text-white fs-5"></i>}
                                            {currentFileData.fileType == "WORD" && <i class="pb-2 bi bi-file-earmark-word-fill text-white fs-5"></i>}
                                            {currentFileData.fileType == "JPG" && <i class="pb-2 bi bi-card-image text-white fs-5"></i>}
                                            </div>
                                        </div>
                                            <div className="mb-1 d-flex justify-content-center mt-3">
                                                <i className="bi bi-pen-fill ms-1 text-black"></i>
                                                <p style={{fontFamily:"KalamehWeb-Medium" , color:"#000"}}>طراح:{currentFileData.creator}</p>
                                            </div>
                                            <div className="mb-1 d-flex justify-content-center mt-3">
                                                <i className="bi bi-calendar-check-fill ms-1 text-black"></i>
                                                <p style={{fontFamily:"KalamehWeb-Medium" , color:"#000"}}>بروزرسانی شده در:{currentFileData.upoledDate}</p>
                                            </div>

                                            <a  download={true} className='mt-3 btn-main-2 2 text-center d-inline-block text-white w-100' style={{borderRadius:"0" , fontFamily:"KalamehWeb-Bold"}} href={`${currentFileData.src}`}>دریافت فایل</a>
                                </div>
                        </div>
                    </div>
            </div>
            <div>
            <div className='container'>
                <div style={{ paddingTop:"20px" , paddingBottom:"20px"}} className='mb-3 container bg-white rounded text-center shadow-sm border'>
                <h2 style={{fontFamily:"KalamehWeb-Bold" , fontSize:"17px"}} className="text-center">
                آخرین طرح درس های پایه ششم
                </h2>
                </div>
                        <div className='row justify-content-center align-items-center'>
                                {

                                    data.slice(-4).map(item =>
                                        
                                    <div key={item.id} className='col d-flex justify-content-center'>
                                            <Card caption={item.caption} fileType={item.fileType} name={item.name} image={item.image} creator={item.creator} slug={item.slug}   />
                                    </div>)
                                }
                        </div>
                </div>
            </div>
                </>
            }
        </div>
</HamyarLayout>
    );
};

export default Page;