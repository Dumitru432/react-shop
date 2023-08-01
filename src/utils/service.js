import React, { useState, useEffect } from 'react';
import { dummyJsonAxios } from './axios';

export function useProducts(category) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getProducts() {
    try {
      setIsLoading(true); // se incarca
      const response = await dummyJsonAxios.get('/products'); // asteptam rasp de la Api
      setProducts(response.data.products); // primim deja rasp si setam products pt starea de mai sus
      setIsLoading(response.isLoading);
    } catch (error) {
      console.error('useProducts error:', error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return {
    products: products.filter((product) =>
      category !== undefined ? product.category === category : true
    ),
    isLoading
  };
}
