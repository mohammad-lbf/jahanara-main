import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AsideSection = ({articles}) => {
    return (
        <div className='d-flex flex-column w-100 align-items-center pt-lg-4'>
            <h5 className='pt-lg-3 w-100 text-center text-lg-end article-subTitle'>آخرین مقالات</h5>
            <div className='w-100'>
            <div style={{width:"150px"}} className="lbf-after-card-img my-0 mt-1 mb-3 mx-auto mx-lg-0"></div>
            </div>

            {/* {
                articles.slice(-5).map(article => (
                    <div style={{overflow:"hidden" , borderRadius:"15px" , height:"100px"}} className='w-100 mb-4 mb-lg-3 shadow-sm d-flex align-items-center border-gray-800 bg-gray-850' key={article.id}>
                        <Image style={{width:"150px" , height:"100px"}} width={1000} height={300} src={`/images/articles/${article.slug}/${article.coverPhoto}`} alt={article.slug}  />
                        <div className='my-2 me-3 d-flex flex-column align-items-start'>
                        <Link href={article.slug}>
                        <p style={{fontSize:"14px"}} className='article-subTitle fw-bold text-end lh-lg'>فناوری و تدریس</p>
                        </Link>
                        <div class="article-duration mt-2">
                        <i class="bi bi-clock"></i> 5 دقیقه
                        </div>
                        </div>
                    </div>
                ))
            } */}
        </div>
    );
};

export default AsideSection;