import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// eslint-disable-next-line react/prop-types
function Product({ brand, title, price, images, category }) {
  return (
    <div className="grid-product">
      <p className="grid-product-category">{category}</p>
      <h3>{`${brand} ${title}`}</h3>
      <Carousel showThumbs={false}>
        {
          // eslint-disable-next-line react/prop-types
          images.map((image, index) => (
            <img key={`${title}-${index}`} src={image} />
          ))
        }
      </Carousel>
      <p className="grid-product-price">Price: {price}</p>
    </div>
  );
}

export default Product;
