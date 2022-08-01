import React, { useState, useEffect } from "react";
import "./home.css";
import NAVBAR from "../Navbar/navbar";
import Row from "../../Row";
import requests from "../../request";
import Banner from "../Banner/banner";

export default function Home() {
  // useEffect(()=>{

  //     })
  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': 'aa093ee1d0msh00d5edc04bd32a6p12e730jsn25b711895e09',
  //         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //     }
  // };

  // fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console)

  return (
    <>
      <NAVBAR />
      <Banner />
      <div className="home-section">
        <Row
          title="NETFLIX ORIGNALS"
          fetchUrl={requests.fetchNetflixOrignals}
          isLargeRow
        />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
        <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
        <Row title="COMADY MOVIES" fetchUrl={requests.fetchComadyMovies} />
        <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
}
