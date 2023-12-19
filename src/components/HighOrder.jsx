import React, { useState } from "react";
const LikeImg =(Wrapped, logo) => {
    const New = (props) => {

    
    const [likeCount, setLike] = useState(0);
    const handleLike = () => {
        setLike(likeCount + 1);
    }

    return (
            <Wrapped {...props} handleLike = {handleLike} likeCount= {likeCount} logo = {logo}/>
    );
 } 
        return New;
};

export default LikeImg;