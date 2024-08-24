import React from 'react'
import './_comments.scss'
import SingleComment from '../SingleComment/SingleComment'

const Comments = () => {

  const handleComment = () => {

  }

  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div class="comment-form d-flex w-100 my-2">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="User-Icon" className='rounded-circle me-3'/>
        <form onSubmit={handleComment} class="d-flex flex-grow-1">
          <input type="text" class="flex-grow-1" placeholder='Write a comment...'/>
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>
      <div class="comment-list">
        {
          [...Array(20)].map(()=>(
            <SingleComment/>
          ))
        }
      </div>
    </div>
  )
}

export default Comments
