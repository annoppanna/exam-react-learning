import axios from 'axios'

const KEY = "AIzaSyDfDIn32sZ6z2T1oIlHR7pRXJ202wP1y50";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key:KEY
    }



})