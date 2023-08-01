import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useProducts } from '../../utils/service';

function Carousel() {
  const { products, isLoading } = useProducts('smartphones');
  console.log(products, isLoading);
  return (
    <ReactCarousel className="carousel" showThumbs={false}>
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.thumbnail} />
          <p>{`${product.brand} ${product.title}`}</p>
        </div>
      ))}
    </ReactCarousel>
  );
}
export default Carousel;
