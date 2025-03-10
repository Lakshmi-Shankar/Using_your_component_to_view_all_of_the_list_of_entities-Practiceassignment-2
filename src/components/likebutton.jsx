import React, { useState } from 'react';
import '../App.css'

const Likebutton = ({liked}) => {
    const [like, setLike] = useState(liked)
    return (
        <p onClick={(e)=>setLike(!like)} className='likeButton'>
            {like?"❤️":"🤍"}
        </p>
    );
}

export default Likebutton;
