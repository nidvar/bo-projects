import type { ProductType } from '../types';

function ProductCard({product}: {product: ProductType}) {
  return (
    <div className="product-card">
        <img src={product.image} />
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default ProductCard;