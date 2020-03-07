import axios from "axios";

const API_KEY = "My3w7iAP6sDDmfE33eJkYrFOkYNKB73z";

// Request for 10 gifs each time as default
export const baseParam = {
  limit: 10,
  key: API_KEY
};

// Set up base Url
export default axios.create({
  baseURL: "http://api.giphy.com/v1/gifs"
});
