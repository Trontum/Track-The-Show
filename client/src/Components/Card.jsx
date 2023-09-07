import React from 'react'
import axios from 'axios';
import { TMDB_API_KEY } from '../pages/keys';


function Card(props) {
  async function handleClick(){
    try{
      const resp=await axios.get(`https://api.themoviedb.org/3/${props.mediaType}/${props.showId}?api_key=${TMDB_API_KEY}`);
      console.log(resp);
      }
      catch(err){
          console.log(err);
      }
  }
  return (
    <div style={{display:"inline", margin:"20px"}} onClick={()=>handleClick()}>
        <img width="250px" height="400px" src={props.showImage} alt="Show Image" />
        <h3 style={{display:"inline"}}>{props.showName}</h3>
        <h3 style={{display:"inline"}}>{props.showRating}</h3>
        
    </div>
  )
}

export default Card;