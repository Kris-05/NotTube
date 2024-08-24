import React from 'react'
import './_watchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from '../../Components/VideoMetaData/VideoMetaData'
import VideoHorizontal from '../../Components/VideoHorizontal/VideoHorizontal'
import Comments from '../../Components/Comments/Comments'

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen-player">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"
           frameborder="0"
           title='MY VIDEO'
           allowFullScreen
           width="100%"
           height="100%">
          </iframe>
        </div>
        <VideoMetaData/>
        <Comments/>
      </Col>
      <Col lg={4}>
        {
          [...Array(10)].map(()=>(
            <VideoHorizontal/>
          ))
        }
      </Col>
    </Row>
  )
}

export default WatchScreen
