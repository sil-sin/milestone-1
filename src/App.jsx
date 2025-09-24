
import { Header } from './components/Header'
import './App.css'

import ProductList from './components/CardList'


function App() {
  const [title, setTitle] = useState("Welcome")

  return (
    <>
      <Header />
      <h1>{title}</h1>
      <ProductList setTitle={setTitle} />
    </>
  )
}

export default App
