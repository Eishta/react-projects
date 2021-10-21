import React, { useState, useEffect } from 'react';
import Loading from '../common/Loading';
import CardList from '../common/CardList';
import '../styles/tours.css';
const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        }
        catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    const removeTour = id => {
        let temp = [...tours].filter(tour => tour.id !== id);
        setTours(temp);
    }

    useEffect(() => {
        fetchTours();
    }, [])

    return (
        <main>
            <div className='container tours'>

                {loading ?
                    <Loading /> :
                    <CardList
                        cardList={tours}
                        removeTour={removeTour} 
                        buttonText='not interested'/>}
            </div>
        </main>
    );
}

export default Tours;