import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Start from './pages/Start'
import Products from './pages/Products'
import Orders from './pages/Orders'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/orders' element={<ProtectedRoute>
          <Orders> </Orders>
        </ProtectedRoute>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
