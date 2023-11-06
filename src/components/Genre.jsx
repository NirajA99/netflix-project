import React from 'react';
import { Link } from 'react-router-dom';

function Genre(props) {
    const {genre, platform} =props;
    
    return (
        <Link className='badge text-bg-info text-decoration-none pay-2 px-4 mx-2' to={`/browsebygenre/${platform}/${genre.id}`}>
        {genre.name}
        </Link>
    );
}

export default Genre;