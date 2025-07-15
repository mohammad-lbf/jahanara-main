import React from 'react';
import FirstBanner from '../modules/articles/FirstBanner';
import ArticlesSection from '../modules/articles/ArticlesSection';

const ArticlesPage = ({articles}) => {
    return (
        <div>
            <FirstBanner />
            <div style={{paddingTop:"15px"}} className='container'>
                <div className='row flex-lg-row-reverse justify-content-center align-items-center'>
                    <div className='col-12 col-lg-12 weblog__articles'>
                        <div className='col-12 text-center'>
                        <ArticlesSection articles={articles} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default ArticlesPage;