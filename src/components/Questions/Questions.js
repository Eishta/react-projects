import React, { useState } from 'react';
import data from '../../data/questions';
import SingleQuestion from './SingleQuestion';
import '../../styles/questions.css';
const Questions = ()=> {
    const [questions, setQuestions] = useState(data);
    return (
        <main>
            <div className='container'>
                <h3> questions and answers about login</h3>
                <section className='info'>
                    {
                        questions.map((question)=> <SingleQuestion key={question.id} {...question}/>)
                    }
                </section>
            </div>
        </main>
    )
}

export default Questions;