import { ProductCard } from "@/products/components/ProductCard";
import { products } from "@/products/data/products";
import React from "react";

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product} //le pasamos todas las propiedades del producto
        />
      ))}
    </div>
  );
};

export default ProductsPage;
