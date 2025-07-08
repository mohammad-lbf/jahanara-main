import Image from "next/image";

const Teacher = ({image , teacher , post , md , lg}) => {
    return (
        <div className={`col-12 col-lg-${lg} col-md-${md} d-flex justify-content-center`}>
        <div style={{borderRadius:"12px" , marginBottom:"23px" , width:"200px"}} className="d-flex flex-column align-items-center justify-content-end border-gray-800 p-3 shadow-sm">
            <img style={{}} className={`rounded mb-3 border`} loading="lazy" width={100} height={100} src={image} />
            <p style={{fontSize:"17px" , lineHeight:"1.3", height:"40px", fontFamily:"KalamehWeb-Bold"}} className="fw-bold text-center mb-0">{teacher}</p>
            <p style={{fontSize:"15px" , color:"green" , fontFamily:"KalamehWeb-Bold"}} className="fw-bold mt-2 mb-0">{post}</p>
        </div>
            </div>
    );
};

export default Teacher;