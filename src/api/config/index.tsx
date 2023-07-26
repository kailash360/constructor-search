import axios from 'axios';
import Constants from '../../Constants';

const axiosConfig = {
    baseURL: Constants.BASE_URL,
    params: {
        key: 'key_fygjntHGW7usvxC8'
    }
}

const apiClient = axios.create(axiosConfig);

const apiCall = (url: string) => apiClient.request({
    url,
    ...axiosConfig
})

export default apiCall
