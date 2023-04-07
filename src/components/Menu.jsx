import React from 'react';
import '../styles/Menu.scss';
import Orders from '../pages/Orders';

const Menu = () => {
    return (
        <div className="Menu">
        <ul>
            <li>
                <a href="/orders" className="title">My orders</a>
            </li>

            <li>
                <a href="/account" >My account</a>
            </li>

            <li>
                <a href="/" >Sign out</a>
            </li>
        </ul>
    </div>
    );
}

export default Menu;