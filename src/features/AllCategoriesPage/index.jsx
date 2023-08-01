import React from 'react';
import Carousel from '../../components/Carousel';
import Product from '../../components/Product';
import ProductsGrid from '../../components/ProductsGrid';
import { useProducts } from '../../utils/service';
function AllCategoriesPage() {
  const { products, isLoading } = useProducts(undefined);
  return (
    <div>
      <Carousel />
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ProductsGrid>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ProductsGrid>
      )}
    </div>
  );
}

export default AllCategoriesPage;
