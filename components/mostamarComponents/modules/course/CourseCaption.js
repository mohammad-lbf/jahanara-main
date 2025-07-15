import React from 'react';

const CourseCaption = ({captionText}) => {
    return (
        <div className='mt-2 d-flex justify-content-center flex-column' >
            <span className='fw-bold bg-white shadow-sm border ps-3 pe-3 py-3 rounded text-center' style={{fontFamily:"Vazirmatn" , direction:"rtl" , textAlign:"right", fontSize:"18px"}}>توضیحات</span>
            <p className='mt-2' style={{fontFamily:"Vazirmatn" , direction:"rtl" , textAlign:"justify", fontSize:"16px" , lineHeight:"1.7"}} dangerouslySetInnerHTML={{ __html: captionText.replace(/\n/g, "<br />") }} />     
        </div>
    );
};

export default CourseCaption;