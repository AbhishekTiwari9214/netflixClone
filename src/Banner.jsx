import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './request';
import './banner.css';


const base_url="https://image.tmdb.org/t/p/original";

function Banner() {

const [movie, setmovie] = useState([]);

useEffect(() => {
    
async function fetchdata() {
    const request =await axios.get(requests.fetchNetflixOriginals);
    // const hello
    
    setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
    // console.log(Math.floor(Math.random()*request.data.results.length-1));
    // console.log
    // console.log(request.data.result)
}
fetchdata();
    
}, []);
// console.log(movie.backdrop_path);
function truncate(str, n) {
    return str?.length>n? str.substr(0,n-1)+"...":str;
}



    return (
        <header className="banner" 
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(${base_url}${movie.backdrop_path})`,
        backgroundPosition:"center center",
        }}>
        
            <div className="banner_components">
                <h1 className="title">{movie.original_name}</h1>
                <div className="banner_buttons">
                    <button className="bannerbutton">play</button>
                    <button className="bannerbutton">My list</button>
                </div>
                <h1 className="banner_description">
{truncate( movie?.overview,150)}
                </h1>
            </div>
            <div className="banner-fedbotton"/>        </header>
    )
}

export default Banner
