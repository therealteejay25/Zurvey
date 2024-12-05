import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/survey' element={<Survey />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
