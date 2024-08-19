import React from 'react'
import './_video.scss'

import { AiFillEye } from 'react-icons/ai'

const Video = () => {
  return (
    <div className='video'>
      <div className="video-top">
        <img src="https://i.ytimg.com/vi/wagn8Wrmzuc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDS0ZmeVJgV2D2mPDVXedFBcaGt1w" alt=""/>
        <span className='video-top-duration'>05.43</span>
      </div>
      <div className="video-title">
        Lady Gaga - Judas (Official Music Video)
      </div>
      <div className="video-details">
        <span>
          <AiFillEye className='video-details-views'/> 5m views &bull;
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video-channel">
        <img src="https://img.lovepik.com/element/40143/1122.png_1200.png" alt="video"/>
        <p>Rainbow Hat Jr.</p>
      </div>
    </div>
  )
}

export default Video
