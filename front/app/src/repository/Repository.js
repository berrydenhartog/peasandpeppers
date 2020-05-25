import axios from "axios";

const baseDomain = "https://jsonplaceholder.typicode.com";
const baseURL = `${baseDomain}`; // Incase of /api/v1;

export default axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    // "Authorization": "Bearer xxxxx"
  }
});