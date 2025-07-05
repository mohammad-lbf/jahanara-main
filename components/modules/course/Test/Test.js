import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Report from './Report';
import AnimatedProgress from './AnimatedProgress';
import Questions from './Questions';
import Timer from './Timer';
import PreventRefresh from '../../../modules/PreventRefresh';
import TestStartButton from './TestStartButton';

const Test = (props) => {

    const [showModal, setShowModal] = useState(false); // مدال در ابتدا نمایش داده می‌شود

    const courseName = props.courseName;
    const courseQuestions = props.courseQuestions;
    const courseTime = props.courseTime;

    const testStarted = props.testStarted;
    const testFinished = props.testFinished;
    const setTestStarted = props.setTestStarted;
    const setTestFinished = props.setTestFinished;

    const testState = useSelector(state => state);
    const dispatch = useDispatch();
    // const { testName  , testTime, questions } = props.testData;
    const data = courseQuestions;

    useEffect(() => {
        if (data && data.length > 0 && testState.questions.length === 0) {
            dispatch({
                type: "ADD_QUESTIONS",
                payload: [...data]
            });
        }
    }, [data, testState.questions, dispatch]);

    useEffect(() => {
        const scrollCenter = () => {
            window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
        };
        scrollCenter();
    }, [testFinished]);

    useEffect(() => {
        const scrollCenter = () => {
            window.scrollTo({ top: 400, left: 0, behavior: 'smooth' });
        };
        scrollCenter();
    }, [testStarted]);

    useEffect(() => {
        scrollTop();
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <div style={{ paddingBottom: "0.65rem" }}>
            {/* مدال قبل از شروع آزمون */}
            {showModal && (
                <div className="modal d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">آماده‌اید؟</h5>
                            </div>
                            <div className="modal-body">
                                <p>آزمون پس از شروع زمان مشخصی دارد و قابل توقف نیست. آیا مطمئن هستید که می‌خواهید شروع کنید؟</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>انصراف</button>
                                <button className="btn btn-primary" onClick={() => { setTestStarted(true); setShowModal(false); }}>شروع آزمون</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="row justify-content-center gy-2 gy-xl-0">
                <div className="col-12 col-lg-8">
                    {!testStarted && !showModal && (
                            <TestStartButton courseTime={courseTime} courseName={courseName} setShowModal={setShowModal} />
                    )}

                    {data && testStarted && !testFinished && (
                        <>
                            <PreventRefresh />
                            <p className="text-black mb-2 border-top pt-1 mt-4 w-100 text-center">پاسخنامه</p>
                                <div className="d-flex flex-row-reverse border-bottom pb-1 w-100 justify-content-center" style={{flexWrap:"wrap"}}>
                                    {testState.questions.map(item => <div key={item.id} className="m-1 bg-light text-center rounded border" style={{width:"30px" , height:"50px" , overflow:"hidden"}}>
                                        <p className="text-secondary border-bottom" style={{fontSize:"15px" , paddingTop:"2px"}}>{item.number}</p>
                                        {item.status != "no-answer" && <div className="bg-secondary" style={{height:"30px" , width:"30px"}}></div>} 
                                    </div>)}
                                </div>
                            <p className="text-center fw-bold w-100 mt-3"><i className="bi bi-alarm"></i> زمان باقیمانده:</p>
                            <Timer setTestFinished={setTestFinished} testTime={20} />
                            <AnimatedProgress testTime={20} />
                            <div className='d-flex justify-content-center'>
                            <button className="btn-main-2 w-50 rounded mt-3" onClick={() => setTestFinished(true)}>پایان آزمون</button>
                            </div>
                            <Questions data={data} />
                            <div className="text-center">
                                <button className="btn-main-2 w-50 rounded mt-3" onClick={() => setTestFinished(true)}>پایان آزمون</button>
                            </div>
                        </>
                    )}

                    {testFinished && <Report courseTime={courseTime} courseName={courseName} courseQuestions={courseQuestions} />}
                </div>
            </div>
        </div>
    );
};

export default Test;
