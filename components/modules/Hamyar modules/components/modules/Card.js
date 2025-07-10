import Image from 'next/image';
import Link from 'next/link';

const Card = ({name , creator , caption, slug , image , fileType}) => {
    return (
            <div style={{width:"280px" , position:"relative" , height:"410px" , overflow:"hidden"}} className='lbf-card border-gray-800 bg-white mb-3'>
            <div className='lbf-card-image-article text-center'>
                <Image
                style={{width:"80px" , height:"120px"}}
                 className='rounded mt-3 border'
                 width={230} height={320} 
                 alt={name}
                 src={image} />
            </div>
            <div className='p-relative'>
                <div style={{width:"100px"}} className="lbf-after-card-img"></div>
                <div className='lbf-card-desc pt-1'>
                    <h2 style={{height:"70px" , fontFamily:"KalamehWeb-Bold" , fontSize:"16px" ,lineHeight:"25px" , color:"#090736"}} className="mb-3 text-center">{name}</h2>
                    <div className='' style={{height:"65px"}}>
                    <p className='text-center mb-0' style={{fontSize:"15px"}}>{caption}</p>
                    </div>
                    <div className="mb-1 mt-2 d-flex justify-content-center">
                    <i className="bi bi-pen-fill ms-1 text-black"></i>
                    <p style={{fontFamily:"KalamehWeb-Medium" , color:"#000"}}>طراح:{creator}</p>
                    </div>
                    {/* <div className='d-flex justify-content-center mt-3'>
                    
                    {fileType == "PDF" && <i class="bi bi-filetype-pdf text-danger fs-5"></i>}
                    {fileType == "WORD" && <i class="bi bi-file-earmark-word-fill text-danger fs-5"></i>}
                    </div> */}
                    {/* <div className="lh-lg text-end" style={{fontFamily:"KalamehWeb-Medium" , height:"80px" , fontSize:"12px" , color:"#000"}} dangerouslySetInnerHTML={{ __html: caption.replace(/\n/g, '<br />') }}>
                    </div> */}
                </div>
            </div>
            <Link className='btn-main-2 2 text-center d-inline-block text-white w-100' style={{position:"absolute" , bottom:"0" , borderRadius:"0" , fontFamily:"KalamehWeb-Bold"}} href={`${slug}`}>مشاهده و دریافت</Link>
        </div>
    );
};

export default Card;