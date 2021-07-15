
import './App.css';
import Row from "./Row"
import request from './request';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">

<Nav/>
<Banner/>

      <Row title="NETFLIX ORIGINAL"  fetchURL={request.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending" fetchURL={request.fetchTrending}/>
    <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
    <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchURL={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
