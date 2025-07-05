import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Option from './Option';

const Question = (props) => {
    const dispatch = useDispatch();
    const [answer, setAnswer] = useState(null);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [correctIndex, setCorrectIndex] = useState(null);

    useEffect(() => {
        // شافل کردن گزینه‌ها و یافتن ایندکس گزینه صحیح
        const shuffleArray = (array) => {
            let shuffledArray = [...array];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return shuffledArray;
        };
        
        const shuffled = shuffleArray(props.options);
        setShuffledOptions(shuffled);
        const correctIdx = shuffled.indexOf(props.correctAnswer);
        setCorrectIndex(correctIdx + 1); // ایندکس را به 1 مبنی تغییر می‌دهیم
    }, [props.options, props.correctAnswer]);

    useEffect(() => {
        if (answer !== null) {
            if (answer === props.correctanswer) {
                dispatch({
                    type: "TRUE_ANSWER",
                    payload: {
                        ...props,
                        clientAnswer: answer
                    }
                });
            } else {
                dispatch({
                    type: "FALSE_ANSWER",
                    payload: {
                        ...props,
                        clientAnswer: answer
                    }
                });
            }
        }
    }, [answer, correctIndex]);

    const changeHandler = (e) => {
        setAnswer(e.target.value);
    };

    return (
        <div style={{ fontSize: "17px" }} className="text-black fw-bold d-flex flex-column align-items-start w-100 border-bottom border-primary pb-3 mb-2">
            <div className="d-flex flex-column align-items-end mb-3">
                <div className="d-flex flex-row-reverse align-items-start justify-content-end mt-2">
                    <div style={{ direction: "rtl", lineHeight: "25px" }} className="me-1 mb-0 mt-1" dangerouslySetInnerHTML={{ __html: props.question.replace(/\n/g, '<br />') }} />
                    <p className="text-center me-1 bg-primary text-white p-2 pb-1 rounded lh-0" style={{direction:"ltr"}}>{props.number}</p>
                    {props.type === "reading" ? <i className="bi bi-book-half pt-2 me-1 rounded text-primary" style={{fontSize:"14px"}}></i> : props.type === "listening" ? <i className="bi bi-earbuds pt-2 me-1 rounded text-primary" style={{fontSize:"14px"}}></i> : null}
                </div>
            </div>
            <div className='w-100'>
                {shuffledOptions.map((option, index) => (
                    <Option 
                        key={index} 
                        optionText={option} 
                        index={index} 
                        questionNumber={props.number} 
                        selectedAnswer={answer} 
                        changeHandler={changeHandler} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;
