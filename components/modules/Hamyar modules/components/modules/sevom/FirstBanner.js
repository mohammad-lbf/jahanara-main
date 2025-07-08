import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const FirstBanner = () => {

  return (
    <div style={{marginTop:"50px" , paddingTop:"50px" , paddingBottom:"50px" , backgroundColor:"#fff" , boxShadow: "1px 3px 15px 2px rgba(224,15,50,0.89)"}} className='container rounded'>
    <div className='row align-items-center'>
            <div className='col-12 col-lg-7'>
                <h2 className='text-center text-lg-end' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#e00f32"}}>
                    پایه سوم دبستان
                </h2>
                <p
                className='mt-3 mb-4 mb-lg-0 text-center text-lg-end' 
                style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.6rem"}}>پایه سوم دبستان | سامانه همیار معلم دبستان جهان آرا</p>
            </div>
            <div className='col-12 col-lg-5 text-center text-lg-start'>
                    <Image style={{width:"100px" , height:"100px"}} src={"/images/components/modules/number-3.png"} height={512} width={512} />
            </div>
    </div>
</div>
  );
};

export default FirstBanner;
