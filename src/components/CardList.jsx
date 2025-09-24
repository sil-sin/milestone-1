import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import Skeleton from './Skeleton';

export default function ProductList({ setTitle }) {
  // useState is a React hook that lets us add state to our component.
  // products: stores the list of products fetched from the API
  // setProducts: function to update the products state
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  // useEffect is a React hook that runs code when the component mounts (shows up on the page)
  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        setProducts(data.products); // Save the products in state
        // Wait 2 seconds before hiding the loading skeleton (for demo purposes)
        setTimeout(() => setLoading(false), 2000)
        setTitle("Product List")
      })
      .catch((error) => {
        // If there's an error, log it and stop loading
        console.error(error);
        setLoading(false);
      });
  }, []); // The empty array means this runs only once when the component mounts

  return (
    <>
      {/* If loading is true, show the Skeleton component (loading cards) */}
      {loading ? (
        // Pass the quantity prop to Skeleton to show 8 loading cards
        <Skeleton quantity={8} />
      ) : (
        // Otherwise, show the list of products
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 p-4 m-4 gap-6">
          {/* Map over the products array and render a ProductCard for each product */}
          {products.map((product) => (
            // The ...product syntax passes all product properties as props to ProductCard
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </>
  )
}
