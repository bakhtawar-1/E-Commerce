import React from 'react';
import './Breadcrum.css'
const Breadcrum = ({ product }) => {
    if (!product || !product.category) {
        return <div>Breadcrumb unavailable.</div>; // Fallback for missing category
    }

    return (
        <div className='breadcrum'> 
            <span >HOME</span> &gt; <span>SHOP</span> &gt; <span>{product.category} &gt;</span> 
            <span>{product.name}</span>
        </div>
    );
};

export default Breadcrum;
