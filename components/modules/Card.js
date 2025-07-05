import Image from 'next/image';
import Link from 'next/link';
import isUserNameInLocalStorage from '../../assets/functions/localStorageChecker';

const Card = ({title , caption, slug , buttonText , coverPhoto , finishStatus}) => {
    return (
            <div style={{width:"350px" , overflow:"hidden"}} className='lbf-card border-gray-800 bg-gray-850 mb-3'>
            <div className='lbf-card-image-article'>
                <Image
                 className='w-100 border'
                 width={1080} height={170} 
                 alt={title}
                 src={coverPhoto} />
            </div>
            <div className='p-relative'>
                <div className='lbf-card-author-image'>
                    <Image
                     style={{width:"60px" , height:"60px"}}
                     alt='author-image'
                     width={300} height={300}
                     src={'/images/20220719_222926.jpg'} />
                </div>
                <div style={{width:"100px"}} className="lbf-after-card-img"></div>
                <div className='lbf-card-desc'>
                    <h2 style={{fontFamily:"KalamehWeb-Bold" , fontSize:"18px" , color:"#090736"}} className="mb-3 text-end">{title}</h2>
                    <div className="mb-3 d-flex ">
                    <i className="bi bi-pen-fill ms-1 text-black"></i>
                    <p style={{fontFamily:"KalamehWeb-Medium" , color:"#000"}}>محمد لبافی</p>
                    </div>
                    <div className="lh-lg text-end" style={{fontFamily:"KalamehWeb-Medium" , height:"80px" , fontSize:"12px" , color:"#000"}} dangerouslySetInnerHTML={{ __html: caption.replace(/\n/g, '<br />') }}>
                    </div>
                </div>
            </div>
            <Link style={{borderRadius:"0" , fontFamily:"KalamehWeb-Bold" , opacity:!finishStatus && "0.65" , pointerEvents:!finishStatus && "none"}} className={`btn-main-2 text-center d-inline-block text-white w-100`} href={`${slug}`}>{buttonText}</Link>
        </div>
    );
};

export default Card;