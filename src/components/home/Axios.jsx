import axios from "axios";

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/products`,
});

export default Example;