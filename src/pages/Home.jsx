import React from 'react';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <>
        <Header />
        <ProductList/>
        </>
    );
}

export default Home;