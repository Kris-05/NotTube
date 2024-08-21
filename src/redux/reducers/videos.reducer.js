import { HOME_VIDOES_FAIL, HOME_VIDOES_REQUEST, HOME_VIDOES_SUCCESS } from "../actionType"

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