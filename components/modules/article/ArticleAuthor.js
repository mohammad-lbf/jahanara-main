import Image from 'next/image';
import React from 'react';

const ArticleAuthor = () => {
    return (
        <div className='d-flex align-items-center'>
        <Image style={{width:"50px" , height:"50px"}} className='rounded-circle ms-2' alt='author-image' width={300} height={300} src={'/images/20220719_222926.jpg'} />
        <span className='fw-bold gray-text-color'>محمد لبافی</span>
    </div>
    );
};

export default ArticleAuthor;