
import { Header } from './components/Header'
import './App.css'
import ProductList from './components/ProductsList.jsx'

function App() {

  return (
    <main className='flex flex-col min-h-full w-full items-center justify-start'>
      <Header />
      <ProductList />
    </main>

  )
}

export default App
