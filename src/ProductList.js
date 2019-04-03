import React from 'react'

const ProductList = ({products, onProductBuy}) => {
  return (
    <div>
      { products.map( p => <li onClick={() => onProductBuy(p.id)}>{p.name}: {p.price}<button> add to cart </button><p>Weird Extra Code</p></li>)}
    </div>
  )
}

export default ProductList
