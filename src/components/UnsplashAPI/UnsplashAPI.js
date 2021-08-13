// import { createApi } from 'unsplash-js';

// const MY_ACCESS_KEY = ''

// // on your node server
// const serverApi = createApi({
//   accessKey: 'MY_ACCESS_KEY',
//   //...other fetch options
// });

const axios = window.axios;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization: 'Client-ID BgFvKlHxfaZsPRIzAd60GwlM8wMg7hcp_8HhH9H63ME'
  }
});