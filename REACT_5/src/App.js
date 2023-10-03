import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Отримуємо всі унікальні категорії зі списку items
        const uniqueCategories = [...new Set(items.map(item => item.category))];
        setCategories(uniqueCategories);
    }, []);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
        } else {
            const newItems = items.filter((item) => item.category === category);
            setMenuItems(newItems);
        }
    }

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>Our menu</h2>
                    <div className='underline' />
                </div>
                <Categories filterItems={filterItems} categories={categories} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
