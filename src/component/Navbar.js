import React from 'react'
import './style.css'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import SendIcon from '@mui/icons-material/Send';
import { RWebShare } from "react-web-share";
import SignIn from './SignIn';
//import {Link} from "react-router-dom";

function Navbar(){
  return(
   <>
   <div className='Main'>
    <a href="/" style = {{color:"blue", textDecoration:"none", fontSize:"20px"}}>
    <div className='logo'>
        <img src="https://i.rada.vn/data/image/2017/07/25/Total-Video-Player-150.png"/>
        <h2>Pranjal Mittal</h2>
    </div>
    </a>
    <div className='content'>
        <ul>
            
            <li>
                <a href ='/' style={{color:"white", textDecoration:"none"}}>
                <div className='container'>
                    <HomeIcon className='icon'/>
                    <p>Home</p>
                </div>
                </a>
            </li>
            
            <li>
                <a href='/Video' style={{color:"white", textDecoration:"none"}}>
            <div  className='container'>
                <PlaylistPlayIcon className='icon'/>
                    <p>PlayLists</p>
                </div>
                </a>
                
            </li>
            <hr/>
            <li>
            <div  className='container'>
                <HistoryIcon className='icon'/>
                    <p>History</p>
                </div></li>
            <li>
            <div className='container'>
                <ThumbUpIcon className='icon'/>
                    <p>Liked Videos</p>
                </div></li>
                <hr/>
            <li>
                <p>Sign in to like videos, comment, and subscribe.</p>
                <a href = '/SignIn'> 
                <button className ='btn'>
            <div  className='container'>
                
                < LoginIcon className='icon'/>
                    <p>Sign In</p>
                    
                </div>
                </button ></a></li>
                <hr/>
            
               <a>
                        <li>
                        
                        <RWebShare
            data={{
              text: "Checkout my Video Player made using React!",
              url: "",
              title: "Video Player",
            }}
            onClick={() => console.log("shared successfully!")}
          >
          <li>
            <a href='/' style={{color:"white", textDecoration:"none"}}>
            <div className='container'>
                <SendIcon className='icon'/>
                    <p>Share</p>
                </div></a></li>
          </RWebShare>
        
                         </li>
                         </a>
            <li>
                <a href='/SignIn' style={{color:"white", textDecoration:"none"}}>
            <div className='container'>
                <LogoutIcon className='icon'/>
                    <p>Log Out</p>
                </div>
                </a>
                </li>
        </ul>
       
    </div>
    <div>
        
    </div>
   </div>
   </>
  )
}
export  default Navbar