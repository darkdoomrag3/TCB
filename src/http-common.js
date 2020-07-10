import axios from 'axios';

export default axios.create({

    baseURL: "http://biftorserver.com",
    headers: {
        "Content-type": "application/json"
    }

})
