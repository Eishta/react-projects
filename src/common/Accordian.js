import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Accordian = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className='accordian'>
            <header>
                <h4>{title}</h4>
                <button className='btn acc-btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Accordian;