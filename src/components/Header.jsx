import React from 'react';
import '../styles/Header.scss';
import shopCartIcon from '../../maquetacion/icons/icon_shopping_cart.svg';
import logoYard from '../../maquetacion/logos/logo_yard_sale.svg';
import iconMenu from '../../maquetacion/icons/icon_menu.svg';

const Header = () => {
    return (
        <nav>
        <img src={iconMenu} alt="menu" className="menu"/>
    
        <div className="navbar-left">
            <img src={logoYard} alt="Logo" className="logo"/>
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email">ernesto.lechuga@zuzu.com</li>
                <li className="navbar-shopping-cart">
                    <img src={shopCartIcon} alt="shopping cart"/>
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Header;