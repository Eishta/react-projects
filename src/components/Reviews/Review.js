import React, { useState } from 'react';
import people from '../../data/reviews';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import '../../styles/reviews.css';
const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const checkPerson = (index) => {
        if (index > people.length - 1) return 0;
        else if (index < 0) return people.length - 1;
        else return index;
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkPerson(newIndex)
        })
    }
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkPerson(newIndex)
        })
    }
    const randomPerson = () => {
        let random = Math.floor(Math.random()* people.length) ;
        if(random === index){
            random = index + 1;
        }
        setIndex(checkPerson(random))
    }
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-image' />
                <span className='quote-icon'><FaQuoteRight /></span>
            </div>
            <h4 className='author'> {name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn move-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn move-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
                <button className='random-btn move-btn' onClick={randomPerson}>
                    surprise me
                </button>
            </div>
        </article>

    )
}
export default Review;