import { duration } from 'jalali-moment';
import React from 'react';

const ArticleDuration = ({duration}) => {
    return (
        <div className='d-flex align-items-center fw-bold gray-text-color my-4'>
            <i className="bi bi-clock ms-1"></i>
            <span className='pb-1'>مدت زمان مطالعه: {duration}</span>
        </div>
    );
};

export default ArticleDuration;