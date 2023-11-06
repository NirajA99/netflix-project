import React from 'react';
import { useSelector } from 'react-redux';
import { platformSelector, videoDetailsSelector } from '../features/Common/commonSlice';
import Rating from './Rating';
import {  time, truncateText } from '../utility/utils';
import VideoPlayer from './VideoPlayer';
import Genre from './Genre';

function TaskPopUp(props) {
    const {data} = useSelector(videoDetailsSelector);
    const platform = useSelector(platformSelector)
    
    // const runtime = (runtime)=>{
    //     let hours = Math.trunc(runtime/60);
    //     let minutes = runtime % 60;
    //     return(hours +":"+ minutes);
    //   }
    return (
        <div className="modal " tabindex="-1" id='video-Modal' >
        <div className="modal-dialog  align-item-center justify-content-center">
          <div className="modal-content ">
            <div className="position-relative ">
              <button type='button' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              {data ?
              <VideoPlayer videoList={data?.videos.results}/> :
              <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        alt="Loading"
      />
              }
        <p className='text-warning fs-4 opacity-50'>{data?.name || data?.title || data?.original_title || data?.original_name}</p>
              <p className='text-secondary fs-5'>Movie Plot : {data?.tagline}</p>
            </div>
            <div className="modal-body">

              <h6 className='text-info'>Movie Info :</h6>
              <ul>
                <li>Movie Name : {data?.title}</li>
                <li>Release Date : {data?.release_date}</li>
                <li>Language : {data?.original_language}</li>
                <li>Runtime : {time( data?.runtime)}</li>
                <li>Ratings : <Rating voteAverage={data?.vote_average} voteCount={data?.vote_count} /></li>
                <li>{
                    data?.genres.map((item)=>(
                    <Genre key={item.id} genre={item} platform={platform} /> 
                      ))
                    }</li>             
              </ul>
              
               
               <h6 className='text-danger'>Storyline :</h6>
              <p>{truncateText(data?.overview)}</p>
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default TaskPopUp;

// export const runtime = (runtime)=>{
//   let hours = Math.trunc(runtime/60);
//   let minutes = runtime % 60;
//   return(hours +":"+ minutes);
// }