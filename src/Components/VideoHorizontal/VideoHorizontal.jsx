import React from 'react'
import './_videoHorizontal.scss'

import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'

import {LazyLoadImage} from 'react-lazy-load-image-component'
import { AiFillEye } from 'react-icons/ai'
import { Col, Row } from 'react-bootstrap'

const VideoHorizontal = () => {

  const seconds = moment.duration('122000').asSeconds()
  const _duration = moment.utc(seconds*1000).format("mm:ss")

  return (
    <Row className='videoHorizontal m-1 py-2 align-items-center'>
      <Col xs={6} md={4} className='videoHorizontal-left'>
        <LazyLoadImage 
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" 
          effect='blur' 
          className='videoHorizontal-thumbnail' 
          wrapperClassName='videoHorizontal-thumbnail-wrapper'
        />
        <span className='video-top-duration'>
          {_duration}
        </span>
      </Col>
      <Col xs={6} md={8} className='videoHorizontal-right p-0'>
        <p className="videoHorizontal-title mb-1">
          Be a full stack developer in 1 month
        </p>
        <div class="videoHorizontal-details">
          <AiFillEye className='video-details-views'/> {' '}
          {numeral(10020200).format("0.a")} views &bull; {' '}
          {moment('2024-08-22').fromNow()}
        </div>
        <div class="videoHorizontal-channel d-flex align-items-center my-1">
          {/* <LazyLoadImage 
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" 
            effect='blur' 
          /> */}
          <p>Pokemon Asia English</p>
        </div>
      </Col>
    </Row>
  )
}

export default VideoHorizontal
