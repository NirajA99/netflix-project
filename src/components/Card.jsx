import React from 'react';
import { truncateText } from '../utility/utils';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { fetchVideoDetails, platformAction } from '../features/Common/commonSlice';

function Card(props) {
    const {video, platform} = props;
    const dispatch = useDispatch();
    
    const getVideoDetails = ()=>{
      
      dispatch(fetchVideoDetails({platform,id :video.id}));
      dispatch(platformAction(platform));
    }
    return (
        <>
          <div className="card h-50 text-white" onClick={getVideoDetails}  data-bs-toggle="modal" data-bs-target="#video-Modal">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`}
        alt="Loading"
      />
      <div className="card-body">
        <h5 className="card-title">
          {video?.name ||
            video?.title ||
            video?.original_title ||
            video?.original_name}
        </h5>
        <p>{truncateText(video?.overview, 60)}</p>
        <Rating voteAverage={video?.vote_average} voteCount={video?.vote_count} />
      </div>
    </div>
        </>
    );
}

export default Card;