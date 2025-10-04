
import { useCart } from '../hooks/useCart'
// ProductCard is a React functional component
// It receives props (properties) from its parent component
// We use object destructuring to get the values directly: title, description, images, price, thumbnail
export const ProductCard = ({ title, description, images, price, thumbnail }) => {
    const [quantity, setQuantity] = useState(1);
    const { cart, handleSetCard } = useCart()

    const handleClick = () => {
        handleSetCard({ title, description, images, price, thumbnail, quantity })
    }


    return (
        <div className='flex flex-col items-center justify-around p-3 border border-zinc-200 rounded-lg shadow-lg shadow-gray-300'>
            <h3>{title}</h3>
            {/* The <picture> element helps show different images for different screen sizes */}
            <picture>
                {/* If the screen is at least 650px wide, use the first image */}
                <source media="(min-width: 650px)" srcSet={images[0]} />
                {/* If the screen is 465px wide or less, use the thumbnail image */}
                <source media="(max-width: 465px)" srcSet={thumbnail} />
                {/* The <img> tag is the default image if none of the above match */}
                <img className='w-48 h-48 object-contain' src={images[0]} alt={title} />
            </picture>
            <p className='text-sm text-gray-500'>{description}</p>
            <p className='font-bold text-lg mt-2'>${price}</p>
            <button onClick={handleClick} className='bg-white text-blue-500 px-4 py-2 rounded-full ml-auto'>
                Cart {quantity}
            </button>
        </div>
    )
}
