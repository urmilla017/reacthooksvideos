import axios from 'axios';

const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';
const BASEURL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL: BASEURL,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

