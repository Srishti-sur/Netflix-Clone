import Banner from './Banner';
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Navbar from './Navbar';
function App() {
  return (
    <div className="app">
      <Navbar/>
   <Banner/>

    <Row title = "NETFLIX ORIGINALS" fetchUrl= {requests.fetchNetflixOriginals}
    isLargeRow={true} />
    <Row title = "Top Rated" fetchUrl= {requests.fetchTopRated}/>
    <Row title = "Trending Now" fetchUrl= {requests.fetchTrending}/>
     <Row title = "Action Movies" fetchUrl= {requests.fetchActionMovies}/>
     <Row title = "Comedy Movies" fetchUrl= {requests.fetchComedyMovies}/>
     <Row title = "Documentaries" fetchUrl= {requests.fetchDocumentaries}/>
     <Row title = "Horror Movies" fetchUrl= {requests.fetchHorrorMovies}/>
     <Row title = "Romantic Movies" fetchUrl= {requests.fetchRomanceMovies}/>
  
    </div>
  );
}

export default App;
