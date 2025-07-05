import React, { useState } from 'react';
import FormInput from './FormInput';

const ContentAdder = ({form , setForm}) => {
    const {content} = form;
    const [type , setType] = useState("");
    const [contentValue , setContentValue] = useState("");
    const [error , setError] = useState("");

    const addHnadler = ()=>{
        if(!type || !contentValue) {
            setError("لطفا همه فیلد ها را پر کنید")
            return;
        }
        const newContent = [...content];
        newContent.push({id: content.length + 1 , type:type , content:contentValue});
        setForm({...form , content:newContent});
        setError("")
        setType("");
        setContentValue("");
    }

    return (
        <div className='w-100 d-flex flex-column align-items-center my-3'>
            <p className='fs-5 mb-3'>افزودن محتوای جدید:</p>
            <FormInput
          name="type"
          placeHolder="نوع"
          type="text"
          value={type}
          onChange={(e)=>setType(e.target.value)}
        />
          <textarea
          rows="10"
          className="form-control bg-gray-850 border-gray-800 color-gray-500"
          name="content"
          placeHolder="محتوا"
          value={contentValue}
          onChange={(e)=>setContentValue(e.target.value)}
          />

        <button className='btn btn-primary my-2' onClick={addHnadler}>افزودن محتوا</button>
        <span className='text-danger'>{error}</span>
        </div>
    );
};

export default ContentAdder;