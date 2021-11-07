import React, { memo } from 'react';
import Card from './Card';

const CardList = ({ removeTour, cardList, buttonText }) => {
    return (
        <section>


            <div className='title'>
                <h1>our tours </h1>
                <div className='underline'></div>
            </div>
            <div>
                {cardList.map(item => <Card card={item} removeTour={removeTour} buttonText={buttonText}/>)}
            </div>
        </section>
    )
}
export default memo(CardList);