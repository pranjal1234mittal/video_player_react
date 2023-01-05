import React from 'react'
import './header.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
  return(
    <>
    <div className="srch" style={{color:"white",marginLeft:"16.5vw"}}>
        <div className='image'>
            <img src = ""/>
        </div>
    
    <input type="search" placeholder = "Search" className='search'/>
    
    <a href = '/SignIn'>   
    <div className='acticon'>
        <AccountCircleIcon className = 'acticon2'/>
    </div>
    </a>
    </div>
    <hr/>
       </>
    )
}
export  default Header