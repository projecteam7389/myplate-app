import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Tips from './pages/Tips'
import About from './pages/about'
import './App.scss'


function App() {

  return (
    <div className='wrap'>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <footer className='site-footer'>
        <small>&copy; {new Date().getFullYear()} MyPlate</small>
      </footer>

    </div>
  )
}

export default App
