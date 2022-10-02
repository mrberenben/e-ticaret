import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  GUID: process.env.REACT_APP_API_GUID
};

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers
});
