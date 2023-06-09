import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu'
import MyOrder from '@containers/MyOrder';
import shopCartIcon from '@icons/icon_shopping_cart.svg';
import logoYard from '@logos/logo_yard_sale.svg';
import iconMenu from '@icons/icon_menu.svg';
import AppContext from '../context/AppContext';

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state} = useContext(AppContext);

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
                <li c
                lassName="navbar-email" 
                onClick={handleToggle}>
                    ernesto.lechuga@zuzu.com
                </li>
                <li 
                className="navbar-shopping-cart" 
                onClick={() => setToggleOrders(!toggleOrders)}>
                    <img src={shopCartIcon} alt="shopping cart"/>
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
            </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
    </nav>
    );
}

export default Header;