import React, { useEffect } from 'react'
import './_watchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from '../../Components/VideoMetaData/VideoMetaData'
import VideoHorizontal from '../../Components/VideoHorizontal/VideoHorizontal'
import Comments from '../../Components/Comments/Comments'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoById } from '../../redux/actions/videos.action'

const WatchScreen = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoById(id))
  }, [dispatch, id])

  const {video, loading} = useSelector(state=>state.selectedVideo)

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen-player">
          <iframe src={`https://www.youtube.com/embed/${id}`}
           frameborder="0"
           title={video?.snippet?.title}
           allowFullScreen
           width="100%"
           height="100%">
          </iframe>
        </div>
        {
          !loading ? <VideoMetaData video={video} videoiD={id}/> : <h5>loading...</h5>
        }
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
