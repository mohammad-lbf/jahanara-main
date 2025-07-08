import React from 'react';
import BasesMenu from '../modules/BasesMenu';

import FirstBanner from '../modules/HomePage/FirstBanner';
import ToolsMenu from '../modules/ToolsMenu';

const Hamyar = () => {
    return (
        <div className='page-padding-tops'>
            <FirstBanner />

            <div className='container'>
                <div className='row justify-content-center'>

                        <div className='mb-3 mt-4 pt-4'>
                                <h3 style={{fontSize:"24px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}} className='mb-4 mt-3 pt-2 text-center'>پایه های تحصیلی:</h3>
                                <BasesMenu />
                        </div>  
                </div>
            </div>
        </div>
    );
};

export default Hamyar;