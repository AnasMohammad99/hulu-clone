import React from 'react';
import "./Nav.css";
import requests from "./requests";

function Nav({setSelectedOption}) {
    return (
        <div className="Nav">
            <h2 onClick={()=>setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchcomedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchRomanceMovies)}>Romancy</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchMysteryMovies)}>Mystery</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchSciFiMovies)}>Sci-FI</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchWesternMovies)}>Western</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={()=>setSelectedOption(requests.fetchTV)}>Movies</h2>
            
        </div>
    )
}

export default Nav;
