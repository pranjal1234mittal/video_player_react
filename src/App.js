import React from 'react'
import Content from './component/Content'
import Header from './component/Header'
import Navbar from './component/Navbar'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './component/SignIn'
import Video from './component/Video'

function App(){
  return(
    <>
    
       <Navbar/>
       <Header/>
       
       <BrowserRouter>
       <Routes>
        <Route path='/'element ={<Content/>}> </Route>
        <Route path='/SignIn'element ={<SignIn/>}> </Route>
        <Route path='/:name'element ={<Video/>}> </Route>

       </Routes>
       </BrowserRouter>
       </>
    )
}
export  default App