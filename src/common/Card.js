import React, { useState } from 'react';
import Button from './Button';


const Card = ({ card, removeTour, buttonText }) => {
    const [readMore, setReadMore] = useState(false);
    const { id, name, image, info, price } = card;

    return (
        <div className='card'>
            {image && <img className='card-img' src={image} alt={name} loading='lazy' />}
            <footer className='card-content'>
                <div className="card-info">
                    {name && <h4 className='card-title'>{name}</h4>}
                    {price && <h4 className="card-subtitle">${price}</h4>}
                </div>
                {info &&
                    <p>{readMore ? info : `${info.substring(0, 200)}...`}
                        &nbsp;<button className='read-more' onClick={() => setReadMore(!readMore)}>{readMore ? ' show less' : ' read more'}</button>
                    </p>
                }
                {buttonText &&
                    <Button className="delete-btn" onclick={() => removeTour(id)} text={buttonText} />
                }
            </footer>
        </div>)
}

export default Card;