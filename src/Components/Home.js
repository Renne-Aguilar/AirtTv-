import React from 'react'
import requests from '../Requests'
import '../Style/Home.css'
import Banner from './Banner'
import VideoCard from './VideoCard'


function Home() {
    return (
        <div className="feed">
            <Banner/>
    
            <div className="feed_videos">
               <VideoCard
               title="Recommend for you" fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow/>
                <VideoCard
               title="Trending Now" fetchUrl={requests.fetchTrending}/>

               <VideoCard
               title="Top Rated" fetchUrl={requests.fetchTopRated}/>
               <VideoCard
               title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
                <VideoCard
               title="Documentaries" fetchUrl={requests.fetchfDocumentaries}/>
                <VideoCard
               title="Comedy Series" fetchUrl={requests.fetchComedyMovies}/>

               
            </div>
        </div>
    )
}

export default Home
