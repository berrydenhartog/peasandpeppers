import axios from "axios";
import Store from '@/store/'
const baseDomain = "https://rb5j31l1t7.execute-api.eu-west-1.amazonaws.com";
const baseURL = `${baseDomain}/prod`; // Incase of /api/v1;

//Store.state.user.signInUserSession.accessToken
//let token = ""
//if ( Store.state.user ) {
//  token = Store.state.user.signInUserSession.idToken.jwtToken
//} 

let instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': 'mAt2uaXNZd2904nbipxwZ1uoJ9KSOco6atC82s0S',
  }
});

instance.interceptors.request.use(config => {
  let token = ""
  if ( Store.state.user ) {
    token = Store.state.user.signInUserSession.idToken.jwtToken
  } 
  config.headers.Authorization = token;
  return config;
});

export default instance