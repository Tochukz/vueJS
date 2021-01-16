import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://ojlinks-api.test:8084/api',
});

export const baseImageUrl = 'http://ojlinks.test:8081/storage/book_img';

export default Axios;