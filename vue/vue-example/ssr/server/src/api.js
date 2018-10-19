import axios from 'axios'

export default {
    fetchItem() {
        return axios.get('http://192.168.0.111:8080/news.json');
    },
    getIndexData() {
        return axios.get('http://127.0.0.1:8080/index.json');
    }
};
