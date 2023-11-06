import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, nfOriginalsSelector } from '../features/Tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchNowPlaying, fetchPopularMovies, fetchTopRatedMovies, nowPlayingSelector, popularMoviesSelector, topRatedMoviesSelector } from '../features/Movies/movieSlice';
import { fetchUpcomingMovies, upcomingMoviesSelector } from '../features/Movies/upcomingSlice';

function HomeScreen(props) {
const [randomIndex, setRandomIndex] = useState(null);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals())
        
        ;
    },[]);
    const nfOriginals = useSelector(nfOriginalsSelector);
        console.log(nfOriginals);
        useEffect(()=>{
            if(nfOriginals.status === 'Success'){
                let randomIndex = Math.floor(Math.random() * nfOriginals.data.results.length);
                setRandomIndex(randomIndex);
            }

        },[nfOriginals]);

       
        // const {data} = nfOriginals;
        // const {results} = data;
        // const popularMovies = useSelector(popularMoviesSelector);
        // console.log(popularMovies);
        // useEffect(()=>{
        //     if(popularMovies.status === 'Success'){
        //         let randomIndex = Math.floor(Math.random() * nfOriginals.data.results.length);
        //         setRandomIndex(randomIndex);
        //     }

        // },[popularMovies]);
        

    return (
        <>{
            nfOriginals.status === 'Loading' ? (
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-secondary" role="status">
  <span className="visually-hidden"></span>
</div> 
            </div>) :
           
            nfOriginals.status === 'Success' ?(
                <div>
            <Header video={nfOriginals.data.results[randomIndex]} platform='tv' /> 
            </div>)
             : ( 'error' )
        }
       
        <div className="container-fluid py-3">
        <Row title="Popular Movies" action={fetchPopularMovies} selector={popularMoviesSelector} platform='movie/' />
        <Row title="Top Rated Movies" action={fetchTopRatedMovies} selector={topRatedMoviesSelector} platform='tv/'/>
        <Row title="Now Playing..." action={fetchNowPlaying} selector={nowPlayingSelector}/>
        {/* <Row title="Upcoming..." action={fetchUpcomingMovies} selector={upcomingMoviesSelector}/> */}
      </div>
        </>
    );
}

export default HomeScreen;

