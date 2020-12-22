import "./VideoCard.css";
import React, { forwardRef } from 'react';
import TextTruncate from "react-text-truncate";

const base_url="http://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({movie},ref) => {
    return (
        <div ref={ref} className="VideoCard">
            <img src={`${base_url+movie.backdrop_path||movie.poster_path}`} alt=""/>
            <TextTruncate
                line={1}
                element="p"
                truncateText="_"
                textTruncateChild={<a href="#">see more</a>}
                text={movie.overview}
            />
            
            <h2>{movie.title||movie.original_name}</h2>
            <p>{movie.release_date||movie.first_air_date}</p>
        </div>
    );
});

export default VideoCard;
