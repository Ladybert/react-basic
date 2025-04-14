import React from 'react'
import "./Thumbnail.css"

const Thumbnail = (props) => {
  return (
    <div className='youtube-wrapper'>
        <div className='img-thumb'>
            <img src={props.thumbnail} alt={props.title} />
            <p className='time'>{props.time}</p>
        </div>
      <p className='title'>{props.title}</p>
      <p className='description'>{props.description}</p>
    </div>
  )
}

Thumbnail.defaultProps = {
    time: '00.00',
    title: 'blank title',
    description: ' ',
}

export default Thumbnail;
