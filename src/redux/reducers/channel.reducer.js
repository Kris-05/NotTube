import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS } from "../actionType"

const startState = {
    loading:true,
    channel:{},
}

export const channelDetailsReducer = (state = startState, action) => {
    const {payload, type} = action

    switch(type){
        case CHANNEL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CHANNEL_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                channel: payload
            }
        case CHANNEL_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                channel: null,
                error: payload
            }    
        default:
            return state
    }
}