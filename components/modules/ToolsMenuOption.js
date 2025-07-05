import Link from 'next/link';
import React from 'react';

const ToolsMenuOption = ({slug , number , type}) => {

    return (
        <>
            {type == "soalat" &&
            <Link className='w-100' href={slug}>
            <div className='scale-up-element' style={{boxShadow: "1px 3px 12px 1px rgba(93,100,233,1)" , position:"relative" ,borderRadius:"15px" , background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(132,127,227,1) 0%, rgba(109,103,222,1) 2%, rgba(44,35,208,1) 30%)" , width:"100%" , height:"170px"}}>
                    <div className='d-flex justify-content-center w-100' style={{position:"absolute" , top:"15px" }}>
                    <div style={{background:"rgba(255 , 255 , 255 , 0.35)" , width:"50px" , height:"50px" , display:"flex" , justifyContent:"center" , borderRadius:"50%"}}>
                        <i style={{fontSize:"30px" , marginTop:"10px", transformOrigin:""}} class="bi bi-patch-question-fill text-white mx-auto"></i>
                    </div>
                    </div>
                    <div style={{position:"absolute" , top:"80px" , margin:"auto" , width:"100%"}}>
                            <p style={{margin:"auto" , textAlign:"center" ,  fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"rgba(255 , 255 , 255 , 0.9)" , lineHeight:"1.9rem"}}>نمونه سوالات</p>
                    </div>
                    <div style={{borderTop:"2px solid rgba(255 , 255 , 255 , 0.4)" , position:"absolute" , top:"120px" , width:"100%"}}>
                            <div style={{position:"relative"}}>
                            <p  style={{position:"absolute" , left:"10px" , top:"7px",  fontSize:"14px" , fontFamily:"KalamehWeb-Medium" , color:"rgba(255 , 255 , 255 , 0.9)" , lineHeight:"1.9rem"}}>{number} نمونه سوال</p>
                            <i style={{position:"absolute" , right:"10px" , top:"14px" , fontSize:"20px"}} class="bi bi-caret-right-fill text-white"></i>
                            </div>
                    </div> 
            </div>     
                </Link>
            }
            {type == "tarhedars" &&
            <Link className='w-100' href={slug}>
            <div className='scale-up-element' style={{boxShadow: "1px 3px 12px 1px rgba(13,209,143,1)" , position:"relative" ,borderRadius:"15px" , background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(179,241,220,1) 0%, rgba(109,228,188,1) 0%, rgba(13,209,143,1) 0%)" , width:"100%" , height:"170px"}}>
                    <div className='d-flex justify-content-center w-100' style={{position:"absolute" , top:"15px" }}>
                    <div style={{background:"rgba(255 , 255 , 255 , 0.35)" , width:"50px" , height:"50px" , display:"flex" , justifyContent:"center" , borderRadius:"50%"}}>
                        <i style={{fontSize:"30px" , marginTop:"10px", transformOrigin:""}} class="bi bi-journal-bookmark-fill text-white mx-auto"></i>
                    </div>
                    </div>
                    <div style={{position:"absolute" , top:"80px" , margin:"auto" , width:"100%"}}>
                            <p style={{margin:"auto" , textAlign:"center" ,  fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"rgba(255 , 255 , 255 , 1)" , lineHeight:"1.9rem"}}>طرح درس</p>
                    </div>
                    <div style={{borderTop:"2px solid rgba(255 , 255 , 255 , 0.4)" , position:"absolute" , top:"120px" , width:"100%"}}>
                            <div style={{position:"relative"}}>
                            <p  style={{position:"absolute" , left:"10px" , top:"7px",  fontSize:"14px" , fontFamily:"KalamehWeb-Medium" , color:"rgba(255 , 255 , 255 , 1)" , lineHeight:"1.9rem"}}>{number} طرح درس</p>
                            <i style={{position:"absolute" , right:"10px" , top:"14px" , fontSize:"20px"}} class="bi bi-caret-right-fill text-white"></i>
                            </div>
                    </div> 
            </div>     
                </Link>
            }
            {type == "mohtava" &&
            <Link className='w-100' href={slug}>
            <div className='scale-up-element' style={{boxShadow: "1px 3px 12px 1px #ff544d" , position:"relative" ,borderRadius:"15px" , background:"#ff544d" , width:"100%" , height:"170px"}}>
                    <div className='d-flex justify-content-center w-100' style={{position:"absolute" , top:"15px" }}>
                    <div style={{background:"rgba(255 , 255 , 255 , 0.35)" , width:"50px" , height:"50px" , display:"flex" , justifyContent:"center" , borderRadius:"50%"}}>
                        <i style={{fontSize:"30px" , marginTop:"10px", transformOrigin:""}} class="bi bi-youtube text-white mx-auto"></i>
                    </div>
                    </div>
                    <div style={{position:"absolute" , top:"80px" , margin:"auto" , width:"100%"}}>
                            <p style={{margin:"auto" , textAlign:"center" ,  fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"rgba(255 , 255 , 255 , 1)" , lineHeight:"1.9rem"}}>محتوای آموزشی</p>
                    </div>
                    <div style={{borderTop:"2px solid rgba(255 , 255 , 255 , 0.4)" , position:"absolute" , top:"120px" , width:"100%"}}>
                            <div style={{position:"relative"}}>
                            <p  style={{position:"absolute" , left:"10px" , top:"7px",  fontSize:"14px" , fontFamily:"KalamehWeb-Medium" , color:"rgba(255 , 255 , 255 , 1)" , lineHeight:"1.9rem"}}>{number} محتوای آموزشی</p>
                            <i style={{position:"absolute" , right:"10px" , top:"14px" , fontSize:"20px"}} class="bi bi-caret-right-fill text-white"></i>
                            </div>
                    </div> 
            </div>     
                </Link>
            }
                        {type == "darsnameh" &&
            <Link className='w-100' href={slug}>
            <div className='scale-up-element' style={{boxShadow: "1px 3px 12px 1px #9c4fff" , position:"relative" ,borderRadius:"15px" , background:"#9c4fff" , width:"100%" , height:"170px"}}>
                    <div className='d-flex justify-content-center w-100' style={{position:"absolute" , top:"15px" }}>
                    <div style={{background:"rgba(255 , 255 , 255 , 0.35)" , width:"50px" , height:"50px" , display:"flex" , justifyContent:"center" , borderRadius:"50%"}}>
                        <i style={{fontSize:"30px" , marginTop:"10px", transformOrigin:""}} class="bi bi-book-half text-white mx-auto"></i>
                    </div>
                    </div>
                    <div style={{position:"absolute" , top:"80px" , margin:"auto" , width:"100%"}}>
                            <p style={{margin:"auto" , textAlign:"center" ,  fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"rgba(255 , 255 , 255 , 1)" , lineHeight:"1.9rem"}}>درسنامه آموزشی</p>
                    </div>
                    <div style={{borderTop:"2px solid rgba(255 , 255 , 255 , 0.4)" , position:"absolute" , top:"120px" , width:"100%"}}>
                            <div style={{position:"relative"}}>
                            <p  style={{position:"absolute" , left:"10px" , top:"7px",  fontSize:"14px" , fontFamily:"KalamehWeb-Medium" , color:"rgba(255 , 255 , 255 , 1)" , lineHeight:"1.9rem"}}>{number} درسنامه آموزشی</p>
                            <i style={{position:"absolute" , right:"10px" , top:"14px" , fontSize:"20px"}} class="bi bi-caret-right-fill text-white"></i>
                            </div>
                    </div> 
            </div>     
                </Link>
            }
        </>
    );
};

export default ToolsMenuOption;