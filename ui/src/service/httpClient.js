import axios from "axios";


const neoConnectAxiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export {
  neoConnectAxiosClient
};