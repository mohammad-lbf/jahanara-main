import React , {useState , useEffect} from 'react';

const AnimatedProgress = ({testTime}) => {
    const[width , setWidth] = useState(100);
    const onePercent = 100/(testTime * 60)
    useEffect(()=>{
    } , [width])
    const timer = ()=>{
        setTimeout(()=>{
            setWidth(width - onePercent);
        } , [1000])};

        if(width > 0){
            timer();
        }

    return (
        <div style={{width:"100%"}}>
            <div className="progress mt-2">
                <div className="progress-bar bg-main-1 progress-bar-striped progress-bar-animated" role="progressbar" style={{width:`${width}%`}}></div>
            </div>
        </div>
    );
};

export default AnimatedProgress