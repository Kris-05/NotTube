import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryBar from '../../Components/CategoryBar/CategoryBar'
import Video from '../../Components/Video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideoByCategory } from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton from 'react-loading-skeleton'

const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch])

  const {videos, activeCategory, loading} = useSelector(state => state.homeVideos)
  
  const fetchData = () => {
    if(activeCategory === 'All') 
      dispatch(getPopularVideos())
    else
      dispatch(getVideoByCategory(activeCategory))
  }

  return (
    <Container>
      <CategoryBar/>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className='spinner-border text-danger d-block mx-auto'></div>
        }>
        <Row>
          {!loading ? videos && videos.map((video,index)=>(
            <Col key={index} lg={3} md={4}>
                <Video video={video}/>
            </Col>
          )) :  
            [...new Array(20)].map(()=>(
              <Col lg={3} md={4}>
                <Skeleton height={180} width="100%"/>
              </Col>
            ))
          }
        </Row>
      </InfiniteScroll>      
    </Container>
  )
}

export default HomeScreen
