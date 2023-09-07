import { useEffect,useState } from "react";
import TitleAndCaption from "../Components/TitleAndCaption";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { getTopMovies,getTopShows, getTrendingMovies, getTrendingShows } from "../features/userReducer";
import Card from "../Components/Card";
import { TMDB_API_KEY } from "./keys";


function Explore(){
    var [searchText, setSearchText]=useState("");
    var [searchResults,setSearchResults]=useState([]);
    const navigate=useNavigate();
    var topMovies=useSelector((state)=>state.user.topMovies);
    var topShows=useSelector((state)=>state.user.topShows);
    var trendingMovies=useSelector((state)=>state.user.trendingMovies);
    var trendingShows=useSelector((state)=>state.user.trendingShows);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(!window.localStorage.getItem("isAuthenticated")){ alert("Not Authorized, Sign-Up or Login to TrackTheShow")
            navigate("/")};
        
    })
    useEffect(()=>{
        setTimeout(handleLogout,1000*60*60*24*10);
        dispatch(getTopMovies());
        dispatch(getTopShows());
        dispatch(getTrendingMovies());
        dispatch(getTrendingShows());
    },[])

    async function handleSearch(e){
        try{
        const resp=await axios.get(`https://api.themoviedb.org/3/search/multi?query=${searchText}&api_key=${TMDB_API_KEY}`);
        setSearchResults(resp.data.results);
        }
        catch(err){
            console.log(err);
        }
    };
    async function handleLogout(e){
        try{
            const resp=await axios.get("http://localhost:5000/logout");
            if(resp.data==="OK"){
                window.localStorage.removeItem("isAuthenticated");
                navigate("/login");
            }
        }
        catch(err){
            console.log(err);
        }
    }


    return (
        window.localStorage.getItem("isAuthenticated") &&
        <div> 
        <TitleAndCaption />
        <input type="text" placeholder="Search Movies, Shows, etc." onChange={e=>setSearchText(e.target.value)}></input>
        <input type="submit" placeholder="Search" onClick={e=>handleSearch(e)}></input>
        {searchResults.length>0 && <div>
        <h1>Your Search Results: </h1>
        {searchResults=searchResults.map((show)=>{
            return(<Card mediaType={show.media_type} showId={show.id} showImage={"https://image.tmdb.org/t/p/original"+show.poster_path} showName={show.name} showRating={show.vote_average}></Card>)
        })};
        </div>}
        <h1>Trending Movies</h1>
        {trendingMovies=trendingMovies.map((movie)=>{
            return(<Card showImage={"https://image.tmdb.org/t/p/original"+movie.poster_path} showName={movie.title} showRating={movie.vote_average}></Card>)
        })}
        <h1>Trending Shows</h1>
        {trendingShows=trendingShows.map((show)=>{
            return(<Card showImage={"https://image.tmdb.org/t/p/original"+show.poster_path} showName={show.name} showRating={show.vote_average}></Card>)
        })}
        <h1>Top Rated Movies</h1>
        {topMovies=topMovies.map((movie)=>{
            return(<Card showImage={"https://image.tmdb.org/t/p/original"+movie.poster_path} showName={movie.title} showRating={movie.vote_average}></Card>)
        })}
        <h1>Top Rated Shows</h1>
        {topShows=topShows.map((show)=>{
            return(<Card showImage={"https://image.tmdb.org/t/p/original"+show.poster_path} showName={show.name} showRating={show.vote_average}></Card>)
        })}
        <button onClick={e=>handleLogout(e)}><Link to="/logout">Log out</Link></button> 
        
         </div>
    )
}
export default Explore;