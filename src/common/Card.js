import React, { useState } from 'react';
import Button from './Button';


const Card = ({ card, removeTours, buttonText }) => {
    const [readMore, setReadMore] = useState(false);
    const { id, name, image, info, price } = card;

    return (<div className='card'>
        {image && <img className='card-img' src={image} alt={name} />}
        <footer className='card-content'>
            <div className="card-info">
                {name && <h4 className='card-title'>{name}</h4>}
                {price && <h4 className="card-subtitle">${price}</h4>}
            </div>
            {info &&
                <p>{readMore ? info : `${info.substring(0, 200)}...`}
                    <button className='read-more' onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
                </p>
            }
            {buttonText &&
                <Button className="delete-btn" onclick={() => removeTours(id)} text={buttonText} />
            }
        </footer>
    </div>)
}

export default Card;