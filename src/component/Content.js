
import { useState, useEffect } from 'react';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Setcard from "./Setcard";
import './content.css'
import Video from "./Video";
function Content() {
  
  const [size,setSize]=useState({});
  const fetchData = () => {

    let api_key = "AIzaSyDFAa0gPHF-ID5lUR7yoWeUhlrPTupXVDw";
  let video_http = "https://www.googleapis.com/youtube/v3/videos?";
  fetch(video_http + new URLSearchParams ({
  key: api_key,
  part: 'snippet',
  chart: 'mostPopular',
  maxResults: 50,
  regionCode: 'IN'}))
  .then (res => res.json ())
  .then (data => {setSize(data);
   console.log(data)
  }
  )
    }
  useEffect(() => {fetchData()}, []);

  return (
    <div style = {{marginTop:"20vh", marginLeft:"11vw", color:'white'}}>
      {size?.items?.map((item,i)=>{
        return (
          <a href={`/${item.snippet.localized.title}`}>
          <div className = 'play'>
            <div className = 'video'><Setcard key={i} id={item.id} /> </div>
          <div className = 'title'><h3>{item.snippet.localized.title}</h3></div>
          
          <div style={{color:"white"}} className = 'notation'>
              <ThumbUpOutlinedIcon  style={{marginLeft:"12px"}} /> Like
              <ThumbDownOffAltOutlinedIcon style={{marginLeft:"12px"}} /> Dislike
              <ReplyOutlinedIcon style={{marginLeft:"12px"}}/> Share
              <AddTaskOutlinedIcon style={{marginLeft:"12px"}}/> Save
              </div>
          </div>
          </a>
        )
      })}
    </div>
  );
}

export default Content;