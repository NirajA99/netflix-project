import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNetflixOriginals, nfOriginalsSelector } from '../features/Tv/tvSlice';
import { fetchPopularMovies, fetchTopRatedMovies, popularMoviesSelector, topRatedMoviesSelector } from '../features/Movies/movieSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import axios from '../utility/axios';
import { requests } from '../utility/requests';
import { shuffle } from '../utility/utils';

function Browse(props) {
    const {platform} = useParams();
    const dispatch = useDispatch();
    const [videoList, setVideoList]= useState(null);
    // const [randomIndex, setRandomIndex] = useState(null);

    const nfOriginals = useSelector(nfOriginalsSelector);
    const popularMovies = useSelector(popularMoviesSelector);

    const [genreList, setGenreList] = useState(null)

    const getGenreList = async() => {
        const response = await axios.get(requests.getGenres(platform));
        let get = shuffle(response.data.genres);
        setGenreList(get);
    }

    useEffect(()=>{
        getGenreList()
    }, [platform])

    useEffect(()=>{
        if(platform === "tv"){
            dispatch(fetchNetflixOriginals());
        }else{
            dispatch(fetchPopularMovies());
        }
    }, [platform])

    useEffect(()=>{
        if(platform === "tv"){
            setVideoList(nfOriginals.data?.results)
        }else{
            setVideoList(popularMovies.data?.results)
        }
    }, [platform, nfOriginals, popularMovies])

    const randomNumber = Math.floor(Math.random() * videoList?.length);

    return (
       <>
        <Header video={videoList ? videoList[randomNumber]: ""} platform={platform}/>

        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[0] : null} platform={platform} />
        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[1] : null} platform={platform} />
        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[2] : null} platform={platform} />
        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[3] : null} platform={platform} />
        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[4] : null} platform={platform} />
       </>
    );
}

export default Browse;