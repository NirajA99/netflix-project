import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Rating(props) {
    const {voteAverage, voteCount} = props;
    let votes = voteAverage/2;
    let votesNumber = Math.floor(votes)
    let totalVotes = [...Array(5)];
    // console.log(totalVotes);
    return (
        <div className="py-1 d-flex align-item-center">
            <div className="star">
        {
            totalVotes?.map((item, index)=>{
                return(
                    
                        
                    index < votesNumber ?
                    <FontAwesomeIcon key={index} icon={faStar} /> 
                    :
                    <FontAwesomeIcon key={index} icon={faStarRegular} /> 
                   
                    
                )
            })
        }
         </div>
         <p className='ms-2 mb-0'>({voteCount})</p>
            </div>

        
    );
}

export default Rating;