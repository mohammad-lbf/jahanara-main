import React from 'react';
import FirstBanner from '../modules/articles/FirstBanner';
import Link from 'next/link'
import Image from 'next/image';
import ArticlesSection from '../modules/articles/ArticlesSection';

const ArticlesPage = () => {
    return (
        <div>
            <FirstBanner />
            <div style={{paddingTop:"15px"}} className='container'>
                <div className='row flex-lg-row-reverse justify-content-center align-items-center'>
                    <div className='col-12 col-lg-12 weblog__articles'>
                        <div className='col-12 text-center'>
                        <ArticlesSection />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default ArticlesPage;