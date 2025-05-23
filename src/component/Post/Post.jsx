import React from 'react'

const Post = (props) => {
  return (
    <div className="post">
        <div className='img-thumb'>
            <img src="https://picsum.photos/seed/picsum/200/150" alt="img thumb" />
        </div>
        <div className='content'>
            <p  onClick={() => {props.goDetail(props.data.id)}} className='title'>{props.data.title}</p>
            <div className='description-container'>
              <p className='desc'>{props.data.body}</p>
            </div>
            <button className='update-btn'  onClick={() => {props.update(props.data)}}>Update</button>
            <button className='delete-btn'  onClick={() => {props.remove(props.data.id)}}>Remove</button>
        </div>
    </div>
  )
}

export default Post
