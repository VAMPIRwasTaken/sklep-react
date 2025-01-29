import axios from "axios";

const fetcher = (endpoint) => axios.get(endpoint).then(({ data }) => data);

export default fetcher;
