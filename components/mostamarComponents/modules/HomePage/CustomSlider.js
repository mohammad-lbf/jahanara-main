import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-bootstrap';
// import articles from '@/DB/articles/index'; // مسیر درست فایل articles.js رو اینجا بذار

const CustomSlider = ({articles}) => {
  return (
    <div className='container mb-3 py-4 mt-4' style={{ background: "#090736", borderRadius: "15px" }}>
      <div className='row align-items-center py-2 py-lg-0'>
        <div className='col-12 col-lg-6'>
          <div className='d-flex flex-column justify-content-center justify-content-lg-end'>
            <h3 style={{ fontSize: "30px", fontFamily: "KalamehWeb-Bold" }} className="fs-4 text-warning fw-bold text-center text-lg-end">آخرین مقالات</h3>
            <div style={{ width: "200px", background: "#fff" }} className="lbf-after-card-img mx-lg-0 mx-auto mb-3"></div>
            <p style={{ fontSize: "16px", fontFamily: "KalamehWeb-Bold" }} className='text-light mb-3 text-center fs-13 text-lg-end'>به روزترین مقالات را در اینجا ببینید</p>
          </div>
        </div>
        <div className='col-12 col-lg-6 text-center text-lg-end mt-4 mt-lg-0'>
          <Carousel indicators={false} interval={2000}>
            {articles.map((article) => (
              <Carousel.Item key={article.id} className='rounded'>
                <Link href={article.slug}>
                  <div className='image-container'>
                    <Image
                      className="d-block w-100 img-fluid"
                      src={article.coverPhoto}
                      alt={article.mainTitle}
                      width={1000}
                      height={400}
                      style={{ width: "100%" }}
                    />
                    <p className='carousel-caption-p' style={{
                      fontFamily: "KalamehWeb-Bold",
                      color: "#fff",
                      background: "rgba(0,0,0,0.5)",
                      padding: "5px",
                      borderRadius: "5px",
                      marginTop: "10px"
                    }}>
                      {article.mainTitle}
                    </p>
                  </div>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
