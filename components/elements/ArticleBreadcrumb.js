import Link from 'next/link';
import React from 'react';

const ArticleBreadcrumb = ({slug , title}) => {
    return (
        <div className=' pt-lg-3 pt-0 mb-4 pb-2'>
            <Link className='fw-bold color-gray-600' href={'/'}>
                صفحه اصلی
            </Link>
            <span className='mx-2'>/</span>
            <Link className='fw-bold color-gray-600' href={'/articles'}>
                مقالات
            </Link>
            <span className='mx-2'>/</span>
            <Link className='fw-bold color-gray-600' href={slug}>
                {title}
            </Link>
        </div>
    );
};

export default ArticleBreadcrumb;