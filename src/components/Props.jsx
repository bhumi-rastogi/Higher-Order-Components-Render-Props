import React, { useState } from 'react'

export default function Props({rend, logo}) {

    const [likeCount, setLike] = useState(0);
    const handleLike = () => setLike(likeCount + 1);

  return <div>{rend({handleLike, likeCount, logo})}</div>
}