import Image from 'next/image';
import React from 'react';

const CourseAuthor = ({coursePublishDate}) => {
    return (


            <div className='d-flex justify-content-between align-items-center w-100'>
                      <div className='d-flex align-items-center'>
                            <Image style={{width:"50px" , height:"50px"}} className='rounded-circle ms-2' alt='author-image' width={300} height={300} src={'/images/20220719_222926.jpg'} />
                            <span className='fw-bold gray-text-color'>محمد لبافی</span>
                    </div>
                <span className='fw-bold gray-text-color'>{coursePublishDate}</span>
            </div>
    );
};

export default CourseAuthor;