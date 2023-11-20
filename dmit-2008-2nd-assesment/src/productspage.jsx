/*ProductsPage*/

/*Create a products page that fetches and displays 12 products.*/

/*app/products/page.jsx:*/

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://your-firebase-url/products.json');
      const data = await res.json();
      setProducts(Object.values(data));
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard key={product.uid} {...product} />
      ))}
    </div>
  );
};

export default ProductsPage;