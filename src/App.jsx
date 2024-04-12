import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Game from './components/Game'
import User from './components/User'
import Users from './components/Users'
import Wrapper from './layouts/Wrapper'
import ErrorPage from './components/404'

function App() {


  return (
    <>
    <Wrapper>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Wrapper>
    </>
  )
}

export default App
