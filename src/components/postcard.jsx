import React from 'react';
import LikeButton from './likebutton'

const Postcard = ({members}) => {
    return (
        <div className='mainDiv'>
            {members.map((details)=>(
                <div key={details.id} className='userCard'>
                    <img src={details.profileImage} />
                    <div className='userInfo'>
                        <h5>{details.username}</h5>
                        <p>{details.content}</p>
                        <LikeButton liked={details.isLiked} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Postcard;