import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import Item from './components/Item'
import Cart from './components/Cart'
import ShopingCartProvider from './context/ShopingCartContext'
import Form from './components/Form'



const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <ShopingCartProvider>
    <Routes>
        <Route exact path='/form/' element ={<Form />}/>
        <Route exact path='/cart/' element ={ <Cart /> }/>
        <Route exact path='/Item/:id' element ={ <ItemDetailContainer /> }/>
        <Route exact path='/' element ={<Item greeting={"Bienvenido a tristore"} />}/>
        <Route exact path='/categoria/:categoria' element={<Item/>}/>
        
      </Routes>
      </ShopingCartProvider>
    </BrowserRouter>
  )
}
export default App
