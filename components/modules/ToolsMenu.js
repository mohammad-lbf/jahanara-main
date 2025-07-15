import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ToolsMenu = () => {
    return (
        <div className='container'>
                    <div className='row justify-content-center'>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image alt='tests' style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/tests.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>نمونه سوال</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image alt='teaching' style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/tarhedars.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>طرح درس</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image alt='education' style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/mohtavaye-amoozeshi.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e" , lineHeight:"1.9rem"}}>محتوای آموزشی</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image alt='teaching' style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/darsnameh.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e" , lineHeight:"1.9rem"}}>درسنامه آموزشی</span>
                </div>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default ToolsMenu;