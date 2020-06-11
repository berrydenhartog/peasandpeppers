import axios from "axios";
import Auth from '@aws-amplify/auth';

const baseDomain = "https://rb5j31l1t7.execute-api.eu-west-1.amazonaws.com";
const baseURL = `${baseDomain}/prod`; // Incase of /api/v1;

let instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': 'mAt2uaXNZd2904nbipxwZ1uoJ9KSOco6atC82s0S',
  }
});

instance.interceptors.request.use(config => {
  return Auth.currentSession().then(
    session => { 
      let accessToken = session.idToken.jwtToken; 
      config.headers.Authorization = `Bearer ${accessToken}`;
      return Promise.resolve(config); 
    }) 
  .catch(() => { 
    return Promise.resolve(config); 
  }); 
});

export default instance