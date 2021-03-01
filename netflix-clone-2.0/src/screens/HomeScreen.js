import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import requests from "../Requests";
import Nav from "../Nav";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        tittle="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row tittle="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
