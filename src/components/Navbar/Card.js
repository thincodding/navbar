import React from 'react'
import img from './image/ss.jpg'
function Card(title,body) {
  return (
    <div>

        <div className='card-container'>
            <div className='image-container'>
                <img src={img}/>
                <p>{body}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Card
