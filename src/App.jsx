import './App.css'
import '../css/styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/main/secondary/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Settings from './pages/Settings'
import Likes from './pages/Likes'
import Profile from './pages/Profile'


function App() {  
  return (
      <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/search' element={ <Search/> }/>
          <Route path='/settings' element={ <Settings/> }/>
          <Route path='/likes' element={ <Likes/> }/>
          <Route path='/profile' element={ <Profile/> }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
