import React from 'react';
import { Accordion } from 'react-bootstrap';
import Reading from './Reading';

const MyAccordion = ({reading , readingCaption}) => {
  return (
    <Accordion className='w-100 mb-3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{direction:"ltr"}} className='d-flex w-100 justify-content-between align-items-center'>
        <i class="bi bi-book-half text-dark me-2"></i> <span className="w-100 fw-bold" >{readingCaption ? readingCaption : "Click here to open the article."}</span>
          {/* <svg style={{width:"1.25rem"}} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg> */}
        </Accordion.Header>
        <Accordion.Body className='rounded' style={{backgroundColor:"#f0f0f0"}}>
              <Reading reading={reading} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
