import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Gestao from './pages/gestao/Gestao'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/sobre' element={<Sobre />}> </Route>
            <Route path='/gestao' element={<Gestao />}> </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App