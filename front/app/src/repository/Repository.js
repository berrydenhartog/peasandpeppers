import axios from "axios";
const baseDomain = "https://rb5j31l1t7.execute-api.eu-west-1.amazonaws.com";
const baseURL = `${baseDomain}/prod`; // Incase of /api/v1;

export default axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'content-type': 'application/json'
    // "Authorization": "Bearer xxxxx"
  }
});