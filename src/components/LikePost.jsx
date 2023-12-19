import React, { useState } from 'react'
import LikeImg from './HighOrder.jsx';

const LikePost = ({handleLike, likeCount, logo}) => (
  <div>
    <button onClick={handleLike}>Like {logo} {likeCount}</button>
  </div>
);

export default LikeImg(
  LikePost, 'Post');