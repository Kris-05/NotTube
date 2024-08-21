import { HOME_VIDOES_FAIL, HOME_VIDOES_REQUEST, HOME_VIDOES_SUCCESS } from "../actionType"
import request from "../../api"

export const getPopularVideos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDOES_REQUEST,
        })
        const { data } = await request.get("/videos",{
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode:'IN',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
            }
        })     
        dispatch({
            type: HOME_VIDOES_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'All',
            }
        })

    } catch (error) {
        console.log(error.message);
        dispatch({
            type: HOME_VIDOES_FAIL,
            payload: error.message,
        })
    }
}

export const getVideoByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDOES_REQUEST,
        })
        const { data } = await request.get("/search",{
            params: {
                part: 'snippet',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q: keyword,
                type: 'video'
            }
        })     
        dispatch({
            type: HOME_VIDOES_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword,
            }
        })

    } catch (error) {
        console.log(error.message);
        dispatch({
            type: HOME_VIDOES_FAIL,
            payload: error.message,
        })
    }
}