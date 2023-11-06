import React, { useEffect, useState } from 'react';
import { truncateText } from '../utility/utils';
import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, headerVideoSelector } from '../features/Common/commonSlice';
import Genre from './Genre';
import VideoPlayer from './VideoPlayer';

function Header(props) {
    const {video , platform} = props;
    const [headChange, setHeadChange] = useState(true);
    const dispatch = useDispatch();
    const headerVideo = useSelector(headerVideoSelector);
    // console.log(Header);
    const {data} = headerVideo;
    useEffect(()=>{
        if(video){
        dispatch(fetchHeaderDetails({platform : platform, id : video.id}));
        }
    },[video]);

    const Headerchange = (event) => {
        event.preventDefault();
        setHeadChange(false)
        // setTimeout(() => {
        //     setHeadChange(true);
        // }, 15000);
    }
    
    return (
        <>
        {headChange ? (
        <div className='position-relative' >
        <img className='w-100' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="tmdb.org" />
        <div className="caption text-white">
        <h1 className='display-3 title mb-0'>{data?.name || data?.title || data?.original_title || data?.original_name}</h1>
        <h3 className='tagline text-warning fst-italic'>{data?.tagline}</h3>
        <p className="fs-4">{truncateText(data?.overview, 50)}</p>
        <Rating voteAverage={data?.vote_average} voteCount={data?.vote_count} />
        <div className=''>
        {
            data?.genres.map((item)=>(
                <Genre key={item.id} genre={item} platform={platform} /> 
            ))
        }
        </div><br />
        <button className='btn btn-warning' onClick={Headerchange}>View Trailer...</button>
     </div>
     
     <div className="header-vignette"></div>
     <div className="header-bottom-vignette"></div> 
     </div> ) : ( 
        <div className='w-100 '>
            <VideoPlayer videoList={data?.videos.results}/> 
            <br /><br /><br /><br />
    <br />
        </div>
    
     )
    } 
    </>
    );
}

export default Header;