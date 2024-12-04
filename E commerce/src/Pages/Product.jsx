import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { all_product } = useContext(ShopContext);
    const product = all_product.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product not found.</div>; // Handle missing product
    }

    return (
        <div>
            <Breadcrum product={product} />
            <p>{product.description}</p>
            <ProductDisplay product={product}/>
            <RelatedProducts/>
        </div>
    );
};

export default Product;
