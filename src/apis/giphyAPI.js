import axios from "axios";

const API_KEY = "My3w7iAP6sDDmfE33eJkYrFOkYNKB73z";

export const baseParam = {
  limit: 5,
  key: API_KEY
};

export default axios.create({
  baseURL: "http://api.giphy.com/v1/gifs"
});
