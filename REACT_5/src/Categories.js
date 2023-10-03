import React from 'react';
const Categories = ({ filterItems, categories }) => {
    console.log(categories);
    return ( <
        div className = 'btn-container' >
        <
        button className = 'filter-btn'
        onClick = {
            () => filterItems("all") } > All < /button> {
            categories.map(
                item => < button className = 'filter-btn'
                onClick = {
                    () => filterItems(item.category) } > { item.category.charAt(0).toUpperCase() + item.category.slice(1) } < /button>
            )
        } <
        /div>
    );
};

export default Categories;