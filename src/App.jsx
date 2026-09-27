
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Error from "./pages/Error"
import { AppProvider } from './context/AppContext'
import SingleMovie from './pages/SingleMovie'

function App() {

  return (
    <AppProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movie/:id" element={<SingleMovie/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </AppProvider>
  )
}

export default App