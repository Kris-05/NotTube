import axios from "axios";

const request = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: import.meta.env.VITE_YT_API_KEY,
    }
})

export default request