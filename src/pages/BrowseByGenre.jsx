import axios from '../utility/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requests } from '../utility/requests';
import Card from '../components/Card';

function BrowseByGenre(props) {
    const [videoList , setVideoList] = useState(null);
    const [genreList , setGenreList] = useState(null);
    const [type , setType] = useState('movie');
    const {platform ,id} = useParams();

    const fetchByGenre = async (platform , id)=>{
        const response = await axios.get(requests.getVideoByGenre(platform, id));
        setVideoList(response.data.results)}
        const fetchGenre = async (platform)=>{
            const response = await axios.get(requests.getGenres(platform));
            console.log(response.data)
            setGenreList(response.data.genres);
        }
    
    useEffect(()=>{
        if (platform && id) {
            fetchByGenre(platform , id)
        }
    },[platform, id])

    useEffect(()=>{
        if (platform) {
            fetchGenre(platform)
        }
    },[platform])

    const handlePlatform =(event) => {
        const value = event.target.value;
        fetchGenre(value);
        setType(value);
    }
    const handleGenre = (e) => {
        const id = e.target.value
        fetchByGenre(type , id);
    }

    return (
        <div className='container-fluid pt-3'>
            <div className='d-flex ' >
                <select name="platform" onChange={handlePlatform } >
                    <option disabled selected>Select Platform</option>
                    <option value="tv">TV</option>
                    <option value="movie">MOVIE</option>
                </select>
                <select name="genre"  onChange={handleGenre}>
                    <option disabled selected>Select Genre</option>
                    {
                        genreList? genreList.map((genre)=> {
                            return <option value={genre.id}>{genre.name}</option>
                        }) : ''
                    }
                    
                </select>
            </div>
            <div className='row gy-4 mt-3'>
        {
            videoList? videoList.map((item)=>(
                <div className='col-lg-3'>
                    <Card video={item} platform={platform} />
                </div>
            )) : ''
        }
            </div>
            
        </div>
    );
}

export default BrowseByGenre;