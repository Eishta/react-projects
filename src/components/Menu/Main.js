import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from '../../data/menu.js';
import '../../styles/menu.css';

const Main = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
        } else {
            let filteredItems = items.filter(item => item.category === category);
            setMenuItems(filteredItems);
        }
    }
    useEffect(() => {
        let categories = ['all', ...new Set(items.map(item => item.category))];
        setCategories(categories);
    }, []);

    return (
        <main className='menu'>
            <section className='section'>
                <div className='title'>
                    <h2>
                        our menu
                    </h2>
                    <div className='underline'></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}
export default Main;