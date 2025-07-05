import Image from 'next/image';
import React from 'react';

const ContentItem = ({type , content , slug}) => {
    if(type === "mainTitle"){
        return(<h1 className='mb-2 py-lg-3 py-2 text-end w-100 border-bottom text-success' style={{fontFamily:"KalamehWeb-Bold" , fontSize:"20px"}}>{content}</h1>)
    }
    if(type === "subTitle"){
        return(<h1 className='my-lg-3 my-1  text-end w-100' style={{fontFamily:"KalamehWeb-Medium" , fontSize:"17px" ,color:"#383E43" }}>{content}</h1>)
    }
    if(type === "text"){
        return(<p className='w-100 border-bottom pb-2' style={{fontFamily:"Vazirmatn" ,fontSize:"16px" , lineHeight:"1.88" , textAlign:"justify" , direction:"rtl" }}>
            {content}
        </p>)
    }
    if(type === "image"){
        return(<Image alt='article-images' className='img-fluid rounded' width={1000} height={300} src={`/images/articles/${slug}/${content}`} />)
    }
};

export default ContentItem;