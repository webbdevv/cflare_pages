import React, {useState} from 'react'
import CardOverlay from './card_overlay'
export default function Card({p, i, imgUrl}) {
  const [hover, setHover] = useState(false) 
  return (
    <div className="post" key={p.title + i} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <CardOverlay post={p} hover={hover} />
      <img className="post-image" src={imgUrl} alt="Random Post image" />
    </div>
  )
}
