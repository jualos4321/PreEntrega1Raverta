import { BrowserRouter, Routes, Route } from 'react-router-dom'


import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'


const App = () => {


  return (
    <BrowserRouter>

      <NavBar />

      

      <Routes>
        <Route exact path='/cart/' element ={<Cart/>}/>
        <Route exact path='/Item/:id' element ={<ItemDetailContainer />}/>
        <Route exact path='/' element ={<ItemListContainer greeting={"Bienvenido a tristore"} />}/>
        <Route exact path='/categoria/:categoria' element={<ItemListContainer />}/>
        
      </Routes>

    </BrowserRouter>
  )
}
export default App
