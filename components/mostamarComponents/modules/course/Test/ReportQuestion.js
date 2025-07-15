import React, { useEffect, useState } from 'react';
import ReportOption from './ReportOption';

const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const ReportQuestion = ({ number, question, options, status, correctanswer, clientAnswer , type }) => {
    const [shuffledOptions, setShuffledOptions] = useState([]);

    useEffect(() => {
        setShuffledOptions(shuffleArray(options));
    }, [options]);

    return (
        <div style={{ fontSize: "17px" }} className="text-black fw-bold d-flex flex-column align-items-start w-100 border-bottom border-primary pb-3 mb-2">
            <div className="d-flex flex-column align-items-end mb-3">
                <div className="d-flex justify-content-end align-items-start mt-2">
                    <p className={`text-end me-1 bg-primary p-2 pb-1 rounded lh-0 ${status === "correct" ? "bg-success text-white" : status === "incorrect" ? "bg-danger text-white" : status === "no-answer" && "bg-warning text-dark"}`}>{number}</p>
                    <div style={{ direction: "rtl", lineHeight: "25px" }} className="me-1 mb-0 mt-1 text-end" dangerouslySetInnerHTML={{ __html: question.replace(/\n/g, '<br />') }} />
                    {type === "reading" ? <i className="bi bi-book-half pt-2 me-1 rounded text-black" style={{fontSize:"14px"}}></i> : type === "listening" ? <i className="bi bi-earbuds pt-2 me-1 rounded text-black" style={{fontSize:"14px"}}></i> : null}
                </div>
            </div>
            <div className='w-100'>
                {shuffledOptions.map((option, index) => (
                    <ReportOption
                        key={index}
                        optionText={option}
                        index={index}
                        correctanswer={correctanswer}
                        clientAnswer={clientAnswer}
                        status={status}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReportQuestion;
