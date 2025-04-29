import React from 'react'
import videoData from '../../../data/data'
import Thumbnail from '../../../component/Youtube/Thumbnail'

 const YoutubeComponent = () => {
  return (
    <div className='content-container'>
    {videoData.map((video, index) => {
      return(
        <Thumbnail
        key={index}
        thumbnail={video.thumbnail}
        time={video.time}
        title={video.title}
        description={video.description}
        />
      )
    })}
  </div>
  )
}

export default YoutubeComponent
