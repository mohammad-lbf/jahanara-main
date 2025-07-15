import React from 'react';
import siteDomain from '@/assets/siteDomain';
import Image from 'next/image';

const ShareSecton = ({slug , mainTitle}) => {
    return (
        <div style={{borderRadius:"15px"}} className='bg-gray-850 border-gray-800 p-3 my-4 d-flex justify-content-lg-between flex-column flex-lg-row align-items-center'>
            <h5 style={{fontFamily:"KalamehWeb-Bold"}} className='mb-4 mb-lg-0 article-subTitle'>اشتراک گذاری دوره:</h5>
            <div className='d-flex'>
            <a
  className='fs-4 mx-2 color-gray-600'
  target='_blank'
  rel='noreferrer'
  href={`https://ble.ir/share/url?url=${siteDomain}/${slug}&text=${encodeURIComponent(`${mainTitle} | دوره آموزشی در وبسایت دبستان شهید جهان آرا`)}`}
>
  <Image alt='bale-icon' src={"/images/components/modules/bale.png"} width={1024} height={1024} style={{width:"25px" , height:"25px"}} />
</a>
<a
  className='fs-4 mx-2 color-gray-600'
  target='_blank'
  rel='noreferrer'
  href={`https://eitaa.com/share/url?url=${siteDomain}/${slug}&text=${encodeURIComponent(`${mainTitle} | دوره آموزشی در وبسایت دبستان شهید جهان آرا`)}`}
>
<Image alt='eitaa-icon' src={"/images/components/modules/eitaa.png"} width={1024} height={1024} style={{width:"25px" , height:"25px"}} />
</a>
{/* <a
  className='fs-4 mx-2 color-gray-600'
  target='_blank'
  rel='noreferrer'
  href={`https://splus.ir/share?url=${siteDomain}/${slug}&text=${encodeURIComponent(`${mainTitle} | دوره آموزشی در وبسایت دبستان شهید جهان آرا`)}`}
>
<Image src={"/images/components/modules/soroush.png"} width={1024} height={1024} style={{width:"25px" , height:"25px"}} /> 
</a> */}
            
            </div>
        </div>
    );
};

export default ShareSecton;