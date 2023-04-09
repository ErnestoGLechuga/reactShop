import React, {useState} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu'
import shopCartIcon from '@icons/icon_shopping_cart.svg';
import logoYard from '@logos/logo_yard_sale.svg';
import iconMenu from '@icons/icon_menu.svg';

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
    <nav>
        <img src={iconMenu} alt="menu" className="menu"/>
        <div className="navbar-left">
            <img src={logoYard} alt="Logo" className="logoNormal"/>
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
                <li className="navbar-email" onClick={handleToggle}>
                    ernesto.lechuga@zuzu.com
                </li>
                <li className="navbar-shopping-cart">
                    <img src={shopCartIcon} alt="shopping cart"/>
                    <div>2</div>
                </li>
            </ul>
        </div>
        {toggle && <Menu />}
    </nav>
    );
}

export default Header;