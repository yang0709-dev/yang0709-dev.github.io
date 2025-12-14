import {Routes,Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Foot from './components/Foot'
import BurgerMenu from './components/BurgerMenu'
import BlogPosts from './pages/BlogPosts'
import Projects from './pages/Projects'
import First from './components/Blogs/First'


export default function App(){
  return (<>
    <BurgerMenu/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/BlogPosts' element={<BlogPosts/>}/>
      <Route path='/First' element></Route>


      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
    <Foot/>
  </>)
}