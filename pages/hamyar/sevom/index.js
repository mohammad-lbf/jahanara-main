import React from 'react';
import darsnameh from '@/DB/Hamyar DB/sevom/darsnameh';
import mohtava from '@/DB/Hamyar DB/sevom/mohtava';
import soalat from '@/DB/Hamyar DB/sevom/soalat';
import tarhedars from '@/DB/Hamyar DB/sevom/tarhedars';
import HamyarLayout from '@/components/layout/HamyarLayout';
import Image from 'next/image';
import ToolsMenuOption from '@/components/modules/ToolsMenuOption';

const Sevom = () => {
    
    return (
            <HamyarLayout>
                    <div style={{minHeight:"100vh"}} className='page-padding-tops'>
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
                        <h3 style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}} className='mb-4 text-center mt-4 pt-4'>ابزار های سامانه | پایه سوم</h3>
                        <div className='container'>
                    <div className='row justify-content-center'>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0 d-flex justify-content-center'>
                <ToolsMenuOption type={"soalat"} number={soalat.length} slug="/hamyar/sevom/soalat" />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                    <ToolsMenuOption type={"tarhedars"} number={tarhedars.length} slug={"/hamyar/sevom/tarhedars"} />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                    <ToolsMenuOption type={"mohtava"} number={mohtava.length} slug={"/hamyar/sevom/mohtava"} />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <ToolsMenuOption type={"darsnameh"} number={darsnameh.length} slug={"/hamyar/sevom/darsnameh"}  />
            </div>
        </div>
        </div>
                    </div>
            </HamyarLayout>
    );
};

export default Sevom;