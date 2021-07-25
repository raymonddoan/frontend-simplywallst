const axios = require("axios");

// Using axios to create the request to where the data is stored.
const swsApi = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "content-type": "application/json",
  },
});

export default swsApi;
