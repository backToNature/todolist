import axios from 'axios'

const fetchItem = () => {
    return axios.get('http://192.168.0.111:8080/news.json');
}

export default fetchItem;
