import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import Skeleton from './Skeleton';

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 m-4 gap-4">
      {loading ? (
        <Skeleton quantity={8} />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      )}
    </div>
  )
}
