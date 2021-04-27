import axios from 'axios'

export default axios.create({
    baseURL :'https://api.unsplash.com',
    headers :{
        Authorization : 
        'Client-ID htyrbTdxkV0jX099aZVU-CBOtHPVRTUSO8YvSt8Eigc'
    }
})