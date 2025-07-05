import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomSlider = () => {
  return (
    <div className='mb-3 mt-4' style={{background:"#090736" , borderRadius:"15px"}}>
          <div className='container py-4'>
        <div className='row align-items-center py-2 py-lg-0'>
            <div className='col-12 col-lg-6'>
              <div className='d-flex flex-column justify-content-center justify-content-lg-end'>
              <h3 style={{fontSize:"30px", fontFamily:"KalamehWeb-Bold"}} className="text-warning fw-bold text-center text-lg-end">آخرین مقالات</h3>
              <div style={{width:"200px" , background:"#fff"}} className="lbf-after-card-img mx-lg-0 mx-auto mb-3"></div>
              <p style={{fontSize:"16px" , fontFamily:"KalamehWeb-Bold"}} className='text-light mb-3 text-center fs-13 text-lg-end'>به روزترین مقالات را در اینجا ببینید</p>
        </div>
            </div>
            <div className='col-12 col-lg-6 text-center text-lg-end mt-4 mt-lg-0'>
            <Carousel indicators={false}>
        <Carousel.Item
              className='rounded'>
              <Link href={`/articles/evolve-books`}>
              <div className='image-container'>
                <Image
                className="d-block w-100 img-fluid"
                src={`/images/public.png`}
                alt="Evolve-books-coverphoto"
                width={1000} height={400}
                style={{width:"100%"}}
              />
              <p className='carousel-caption-p'>معرفی کتاب های Evolve</p>
              </div>
              </Link>
          </Carousel.Item>
          <Carousel.Item
              className='rounded'>
              <Link href={`/articles/cefr-scales`}>
              <div className='image-container'>
                <Image
                className="d-block w-100 img-fluid"
                src={`/images/public.png
                  `}
                alt="CEFR-SCALES-Coverphoto"
                width={1000} height={400}
                style={{width:"100%"}}
              />
              <p className='carousel-caption-p'>معرفی مقیاس‌های CEFR</p>
              </div>
              </Link>
          </Carousel.Item>
      </Carousel>
            </div>
        </div>
    </div>
    </div>
    
  );
};

export default CustomSlider;
