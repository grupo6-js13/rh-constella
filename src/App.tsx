import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className='min-h-[80vh]'></div>
          <Routes>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App