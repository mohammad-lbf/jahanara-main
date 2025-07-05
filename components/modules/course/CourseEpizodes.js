import React from 'react';
import EpizodeAccordian from './EpizodeAccordian';
import { Accordion } from "react-bootstrap";

const CourseEpizodes = ({courseEpizodes}) => {
    const courseData=[
        {
            caption:"قسمت اول: معرفی دوره" ,
            videoSrc:"/videos/word-intro.mp4"
        },
        {
            caption:"قسمت دوم: نصب نرم افزار" ,
            videoSrc:"/videos/word-intro.mp4"
        }
    ]
    return (
        <div className='mt-2 d-flex justify-content-center align-items-center flex-column' >
                      <span
          style={{fontSize:"17px" , color:"#464749" , 
          fontFamily:"KalamehWeb-Medium" , maxWidth:"300px"}} 
          className='text-center bg-primary text-white pt-2 mb-3 pb-2 p-3 border rounded-pill shadow-sm'>قسمت های دوره <i class="bi bi-caret-down-fill"></i></span>
          <span
          className='text-center mb-4 lh-lg'
          style={{fontSize:"14px" , color:"#464749" , 
          fontFamily:"KalamehWeb-Medium"}} >برای مشاهده هر قسمت، روی آن ضربه بزنید تا کشو باز شود</span>
           {
            courseEpizodes.map( i => <EpizodeAccordian key={i.caption} caption={i.caption} videoSrc={i.videoSrc} />)
           }
        </div>
    );
};

export default CourseEpizodes;