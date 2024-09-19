
import { Routes,Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import SingIn from './pages/SingIn/SingIn'

export default function App() {
  
  return <>
      <Routes>
        <Route path = '/' element = {<SingIn/>}></Route>
        <Route path = '/home' element = {<Home/>}></Route>
      </Routes>
    </>
}
