import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export const Header = () => {
  const { cart, handleSetCard, name } = useCart()
  console.log(cart)
  console.log(name)
  return (
    <nav  className="bg-blue-500 w-full  text-white p-4">
      <ul className='flex gap-2'>
        <li className='text-primary '>Home</li>
        <li>Products</li>
      </ul>
      <div>
        <button className='bg-white text-blue-500 px-4 py-2 rounded-full ml-auto'>
          Cart ({cart.length})
        </button>
      </div>
    </nav>
  )
}

