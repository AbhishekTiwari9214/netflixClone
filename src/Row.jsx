import React,{useState, useEffect}  from 'react'
import axios from './axios';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'



const base_url="https://image.tmdb.org/t/p/original"
function Row({title, fetchURL, isLarge}) {
    const [movies,setmovies]=useState([])
    const [videoURL, setvideoURL] = useState("");
    useEffect(()=>{
async function fetchData() {
    const request= await axios.get(fetchURL);
    
    // console.log(request.data.results);
    setmovies(request.data.results)
    return request;
}
fetchData();
    },[fetchURL])

    const moviehandle=(movie)=> {
        if (videoURL) {
            setvideoURL("");
        }else{
            movieTrailer(movie?.name ||movie?.original_title || "")
            .then((url) =>{  
const movieparam=new URLSearchParams(new URL(url).search);
setvideoURL(movieparam.get("v"))
            }).catch((error)=>console.log(error));
        }
    };
    


    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
    return (
        <div className="row">
            {title}
            <div className="row_posters">

                {movies.map(movie=>(
                <img 
                key={movie.id}
                onClick={()=>moviehandle(movie)}
                className={`row_poster ${isLarge && "row_large"}`} src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
))}
            </div>
            
           {videoURL && <YouTube videoId={videoURL} opts={opts}  />}
        </div>
    )
}

export default Row
