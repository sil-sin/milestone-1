import {useEffect, useState} from 'react';
import {ProductCard} from './ProductCard';
import Skeleton from './Skeleton';

export default function ProductList() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [error, setError] = useState();

    function handleFilterChange(event) {
        setSelectedCategory(event.target.value);
    }


    useEffect(() => {
        setError(undefined);
        // Fetch data from the API
        fetch("https://dummyjson.com/products")
            .then((response) => response.json()) // Convert the response to JSON
            .then((data) => {

                setProducts(data.products); // Save the products in sta
                // Wait 2 seconds before hiding the loading skeleton (for demo purposes)
                setTimeout(() => setLoading(false), 2000)
            })
            .catch((error) => {
                // If there's an error, log it and stop loading
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
    }, []);


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const PRODUCT_CATEGORIES = new Set(products.map(product => product.category)); //? mapping through the products , returning categories, set picks unique only

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'all' ? true : product.category.toLowerCase() === selectedCategory.toLowerCase()
        const searchTermMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchTermMatch;
    })

    useEffect(() => {
        if (!filteredProducts.length) {
            setError('No products found');
        }else {
            setError(undefined)
        }
    }, [filteredProducts])


    if (loading) {
        // Pass the quantity prop to Skeleton to show 8 loading cards
        return <Skeleton quantity={8}/>
    }

    return (
        <>
            {/* If loading is true, show the Skeleton component (loading cards) */}
            {loading ?
                ( <Skeleton quantity={8}/>
            ) : (
                // Otherwise, show the list of products
                <>
                    <select onChange={handleFilterChange}>
                        <option selceted value="all">All Categories</option>
                        {[...PRODUCT_CATEGORIES].map((category, index) => (
                            <option key={category + '' + index} value={category}>{category.toUpperCase()}</option>
                        ))}
                    </select>
                    {/*<select value={selectedCategory} onChange={handleFilterChange}>*/}
                    {/*    <option value="">All Categories</option>*/}
                    {/*    <option value="electronics">Electronics</option>*/}
                    {/*    <option value="jewelery">Jewelery</option>*/}
                    {/*    <option value="men's clothing">Men's Clothing</option>*/}
                    {/*    <option value="women's clothing">Women's Clothing</option>*/}
                    {/*</select>*/}
                    <input onChange={handleSearch} type="text" placeholder='Search...'
                           className='bg-white mt-2 border-gray-600 border-2 rounded-md p-2 text-black'/>
                    {error ? (
                            <p className="mt-20 text-xl ">{error}</p>):
                           ( <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 p-4 m-4 gap-6">
                        {/* Map over the products array and render a ProductCard for each product */}
                        {filteredProducts.map((product) => (
                            // The ...product syntax passes all product properties as props to ProductCard
                            <ProductCard key={product.id} {...product}  />
                        ))}
                    </div>)}
                </>

            )}
        </>
    )
}
