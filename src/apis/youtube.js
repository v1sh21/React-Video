import axios from 'axios';

const KEY= 'AIzaSyAU9J4iB6sBpQbazY8wYvY8C4c9ELX4RKE';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});