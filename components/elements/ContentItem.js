import React, { useState } from 'react';
import FormInput from './FormInput';

const ContentItem = ({id , type , contentCurrentValue , form , setForm}) => {
    const [contentType , setContentType] = useState(type);
    const [contentValue , setContentValue] = useState(contentCurrentValue);
    const {content} = form;

    const deleteHandler = ()=>{
        const newContent = content.filter(item => item.id !== id);
        setForm({...form , content:newContent});

    }
    const editHandler = ()=>{
        const currentContentIndex = content.findIndex(item => item.id == id);
        content[currentContentIndex].type = contentType;
        content[currentContentIndex].content = contentValue;
        setForm({...form});

    }
    return (
        <div className='w-100 my-3'>
            <p className='my-2 fs-5'>محتوای شماره {id}:</p>
            <FormInput
          name="type"
          placeHolder="نوع"
          type="text"
          value={contentType}
          onChange={(e)=>setContentType(e.target.value)}
        />
          <textarea
          rows="10"
          className='form-control bg-gray-850 border-gray-800 color-gray-500'
          name="content"
          placeHolder="محتوا"
          value={contentValue}
          onChange={(e)=>setContentValue(e.target.value)}
          />
          <div className='d-flex justify-content-between mt-3'>
                <button onClick={deleteHandler} className='btn btn-danger'>
                    حذف محتوا
                </button>
                <button onClick={editHandler} className='btn btn-warning'>
                    ویرایش محتوا
                </button>
          </div>
        </div>
    );
};

export default ContentItem;