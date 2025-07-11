import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BasesMenu = () => {
    return (
        <div className='container'>
                    <div className='row justify-content-center'>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/hamyar/sevom"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3' style={{boxShadow: "1px 1px 8px 2px rgba(224,15,50,0.89)"}}>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/hamyar/components/modules/number-3.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#e00f32"}}>پایه سوم</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/hamyar/chaharom"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3' style={{boxShadow: "1px 1px 8px 2px #4f0099"}}>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/hamyar/components/modules/number-4.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#4f0099"}}>پایه چهارم</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/hamyar/panjom"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3' style={{boxShadow: "1px 1px 8px 2px #1d6600"}}>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/hamyar/components/modules/number-5.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#1d6600"}}>پایه پنجم</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/hamyar/sheshom"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3' style={{boxShadow: "1px 1px 8px 2px #ff6200"}}>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/hamyar/components/modules/number-6.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#ff6200"}}>پایه ششم</span>
                </div>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default BasesMenu;