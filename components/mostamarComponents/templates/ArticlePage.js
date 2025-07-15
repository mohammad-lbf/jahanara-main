import React from 'react';
import ArticleSection from '../../components/modules/article/ArticleSection';
import AsideSection from '../modules/article/AsideSection';

const ArticlePage = ({article , articles}) => {
    
    return (
        <div className='page-padding-tops'>
            <div className='pt-4'>
                <div className='container pt-4 pt-lg-0'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-xl-9'>
                                <ArticleSection article={article} />
                            </div>
                            {/* <div className='col-12 col-xl-4'>
                                <AsideSection articles={articles} />
                            </div> */}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;