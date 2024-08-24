import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData-top">
        <h5>Video Title</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(10000).format("0.a")} views &bull; {' '}
            {moment('2024-08-22').fromNow()}
          </span>
          <div>
            <span className='m-1'>
              <MdThumbUp size={26} />{numeral(10000).format("0.a")}
            </span>
            <span className='m-1'>
              <MdThumbDown size={26} />{numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData-channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Channel-Icon" className='rounded-circle me-3'/>
          <div className="d-flex flex-column">
            <span>Pokemon Asia English</span>
            <span>{numeral(10000).format("0.a")}
              Subcribers
            </span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">
          Subscribe
        </button>
      </div>
      <div className="videoMetaData-description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptas quis labore atque pariatur consectetur adipisci 
          libero. Reprehenderit eum a dolorem distinctio ad unde atque, 
          iusto optio, praesentium quibusdam soluta ea nemo amet 
          blanditiis hic quisquam dignissimos ex placeat officiis.
          Reiciendis et voluptate ab sit. Ducimus qui veniam inventore 
          accusamus soluta!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptas quis labore atque pariatur consectetur adipisci 
          libero. Reprehenderit eum a dolorem distinctio ad unde atque, 
          iusto optio, praesentium quibusdam soluta ea nemo amet 
          blanditiis hic quisquam dignissimos ex placeat officiis.
          Reiciendis et voluptate ab sit. Ducimus qui veniam inventore 
          accusamus soluta!
        </ShowMoreText>
      </div>
    </div>
  )
}
import './_videoMetaData.scss'

export default VideoMetaData
