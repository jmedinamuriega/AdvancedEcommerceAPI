import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
