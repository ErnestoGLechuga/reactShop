import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';
import iconClose from '../../maquetacion/icons/icon_close.png';

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
            <img src={iconClose} alt="x"/>
       </div>
       <ProductInfo />
       </aside>
    );
}

export default ProductDetail;