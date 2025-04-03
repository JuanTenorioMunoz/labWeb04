import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
