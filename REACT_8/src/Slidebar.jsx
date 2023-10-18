import React from 'react';
import { links } from './data';
const Slidebar = () => {
    return (
        <ul className="links">
           {
            links.map(link=><li key={link.id}><a href={link.url}>{link.text}</a></li>)
           }
        </ul>
    );
};

export default Slidebar;