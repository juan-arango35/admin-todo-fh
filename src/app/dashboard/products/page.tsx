import { ProductCard } from '@/products/components/ProductCard'
import React from 'react'


const ProductsPage = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
    <ProductCard/>
    </div>
  )
}

export default ProductsPage