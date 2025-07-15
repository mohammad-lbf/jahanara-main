import React from 'react';
import Link from 'next/link';


const CourseBreadcrumb = ({courseName , courseSlug}) => {
    return (
        <div className=' p-3 mt-0 mt-lg-0 mb-2 border rounded shadow-sm bg-white'>
            <Link className='fw-bold color-gray-600' href={'/'}>
                صفحه اصلی
            </Link>
            <span className='mx-2'>/</span>
            <Link className='fw-bold color-gray-600' href={'/courses'}>
                دوره های آموزشی
            </Link>
            <span className='mx-2'>/</span>
            <Link className='fw-bold color-gray-600' href={courseSlug}>
                {courseName}
            </Link>
        </div>
    );
};

export default CourseBreadcrumb;