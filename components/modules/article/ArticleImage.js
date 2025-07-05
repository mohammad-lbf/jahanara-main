import Image from 'next/image';
import React from 'react';

const ArticleImage = ({slug , coverPhoto}) => {
    return (
        <div style={{maxWidth:"500px"}}>

            <Image className='img-fluid rounded mt-4' alt='image-coverPhoto' width={1000} height={300} src={`${coverPhoto}`} />
        </div>
    );
};

export default ArticleImage;