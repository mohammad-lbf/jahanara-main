import React from 'react';

import Question from './Question'

const Questions = ({data}) => {
    const multipleQuestions = data.filter(item => item.type == "multiple");

    return (
        <div className="d-flex border-top mt-3 flex-column align-items-center align-items-lg-end">

            {
                multipleQuestions.map(item => <Question key={item.id} {...item} />)
            }
        </div>
    );
};

export default Questions;