import React, { useState } from "react";
import { data } from "../data";

export const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure onClick={() => handleProductClick(product)}>
            <img src={product.urlImage} alt={product.title} />
          </figure>
          <div className="info-product">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <button className="btn-add-cart">Añadir al carrito</button>
          </div>
        </div>
      ))}

     
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.urlImage} alt={selectedProduct.title} />
            <p className="price">${selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};
