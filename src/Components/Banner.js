import React, { useState, useEffect } from 'react'
import '../Style/Banner.css'
import axios from '../axios'
import requests from '../Requests'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);



    return (

        <div className="banner">
            <div className="banner_contents">
                <h1 className="banner_title">All AirTv+ Originals</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">Start Your Free Trial</button>
                </div>
                <h3 className="banner_description">Here is the description of the video and you can see shortly what happen, if you like it, just play.</h3>
            </div>
            <div className="banner_fadeBottom"></div>
        </div>
    )
}

export default Banner
