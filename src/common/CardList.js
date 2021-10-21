import React from 'react';
import Card from './Card';

const CardList = ({cardList, buttonText, removeTours})=>{
    return (
        <div className='card-list'>
            {cardList.map(card=> <Card card={card} buttonText={buttonText} removeTours={removeTours}/>)}
        </div>
    );
}

export default CardList;