import axios from "axios";

export default axios.create({
  baseURL: "https://webapi.rialpayment.com:8080",
});
