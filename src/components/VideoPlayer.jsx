import React, { useEffect, useState } from 'react';

function VideoPlayer(props) {
    const {videoList}= props;
    const [key , setKey] = useState('')
    useEffect(()=>{
        if (videoList && videoList.length > 0 ) {
            const trailer = videoList?.find((item)=>{
                return item.type === 'Trailer';
             } )
             setKey(trailer.key);
            }
            },[videoList])
       
        // if (videoList > 0 || videoList.type === 'Teaser') {
        //     return(
        //     setKey(videoList.key)
        //     )
        // }else{
        //     alert('error')
        // }
    
    
    return (
        <div class="ratio ratio-16x9 video-player">
  <iframe
   src={`https://www.youtube.com/embed/${key}?rel=0&autoplay=1&mute=1`} title="YouTube video" allowFullScreen >
    
   </iframe>
</div>
    );
}

export default VideoPlayer;