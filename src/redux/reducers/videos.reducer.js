import { HOME_VIDOES_FAIL, HOME_VIDOES_REQUEST, HOME_VIDOES_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionType"

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
}

export const homeVideosReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case HOME_VIDOES_SUCCESS:
            return {
                ...state,
                videos: state.activeCategory === payload.category ? [...state.videos, ...payload.videos] : payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category
            }
        case HOME_VIDOES_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case HOME_VIDOES_REQUEST:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

const startState = {
    loading:true,
    video:null
}

export const selectedVideoReducer = (state = startState, action) => {
    const {payload, type} = action

    switch(type){
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                video: payload
            }
        case SELECTED_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                video: null,
                error: payload
            }    
        default:
            return state
    }
}