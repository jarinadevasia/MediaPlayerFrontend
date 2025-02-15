import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
function App() {

  return (
    
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landingpage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/watch' element={<Watchhistory />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
