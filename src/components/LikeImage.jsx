import React, { useState } from 'react'
import LikeImg from './HighOrder';

const LikeImage = ({ handleLike, likeCount, logo}) => (
  <div>
    <button onClick={handleLike}> Like {logo} {likeCount} </button>
  </div>
);

export default LikeImg(LikeImage, 'Image');