import React from 'react'
import moment from 'moment'
import './_singleComment.scss'

const SingleComment = () => {
  return (
    <div className='comment p-2 d-flex'>
      <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="User-Icon" className='rounded-circle me-3'/>
      <div className="comment-body">
        <p className="comment-header mb-1">
            Krisna &bull; {' '} {moment('2024-08-22').fromNow()}
        </p>
        <p className='mb-1'>
            Nice video Dude....
        </p>
      </div>
    </div>
  )
}

export default SingleComment
