import React, { useEffect, useState } from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card from "./Card";

import 'swiper/css';
import 'swiper/css/navigation'
import { truncateText } from '../utility/utils';
import { fetchPopularMovies, popularMoviesSelector } from '../features/Movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../utility/axios';
import { requests } from '../utility/requests';

function Row(props) {
  const{title , action, selector, platform, isGenreRow, genre} = props;
  // const [randomIndex, setRandomIndex] = useState(null);
    
  const popular = useSelector(selector);
//   useEffect(()=>{

//   if(popular.status === 'Success'){
//     let randomIndex = Math.floor(Math.random() * popular.data.results.length);
//     setRandomIndex(randomIndex);
// }
  
// },[popular]);

const [videoByGenre,setVideoByGenre] = useState(null)

const fetchVideoByGenre = async() => {
  const response = await axios.get(requests.getVideoByGenre(platform, genre?.id))
  setVideoByGenre(response.data.results)
}


useEffect(()=>{
  if (isGenreRow && genre && platform) {
    fetchVideoByGenre()
  }
},[isGenreRow,platform, genre])
const dispatch = useDispatch();
    useEffect(()=>{
      if (!isGenreRow) {
        dispatch(action())
      }
        
    },[isGenreRow]);
        // console.log(popular);
       
        
  // const {movie}= props; 
  // console.log(movie)
    return (
        <>
        {isGenreRow ? 
        <div className="py-3 video-row text-white">
        <h3 className='mb-2'>{genre?.name}</h3>
        <Swiper 
        modules={[Navigation]}
        
        navigation
      spaceBetween={20}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
       {
        
        videoByGenre?.map((item)=>{
          return(
            <SwiperSlide key={item.id}>
              <Card video={item } platform={platform} />
            </SwiperSlide>

          )
        }) 
        
      }
    
    </Swiper>
    </div> :
     <div className="py-3 video-row text-white">
     <h3 className='mb-2'>{title}</h3>
     <Swiper 
     modules={[Navigation]}
     
     navigation
   spaceBetween={20}
   slidesPerView={6}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
 >
   
    {
     popular?.status === 'Success' ?
     popular.data.results.map((item)=>{
       return(
         <SwiperSlide key={item.id}>
           <Card video={item } platform={platform} />
         </SwiperSlide>

       )
     }) : "Loading"
     
   }
 
 </Swiper>
 </div>
    }
    </>
    );
}

export default Row;