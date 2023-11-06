const Api_Key = '01b81d060157ac7ad19f5e303a87c572';

export const requests={
    getNfOriginals:`discover/tv?api_key=${Api_Key}&with_networks=213`,
    getMovies: (endPoint)=>`movie/${endPoint}?api_key=${Api_Key}&language=en-US&page=1`,
    getTv: (endPoint)=>`tv/${endPoint}?api_key=${Api_Key}&language=en-US&page=1`,
    getVideoDetails: (type)=> `${type.platform}/${type.id}?api_key=${Api_Key}&language=en-US&page=1=1&append_to_response=videos`,
    getGenres: (platform)=>`genre/${platform}/list?api_key=${Api_Key}`,
    getVideoByGenre : (platform, genreId) => `discover/${platform}?api_key=${Api_Key}&with_genres=${genreId}`
}

export const endPoints = {
    popular : 'popular',
    top_rated : 'top_rated',
    airing_today : 'airing_today',
    on_the_air : 'on_the_air',
    now_playing : 'now_playing',
    upcoming : 'upcoming'
}