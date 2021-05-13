import axios from "axios";

export default axios.create({
  baseURL: "https://api-restfull-blogcc.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});

//"Authorization": `Bearer ${JSON.parse(token)}`


//https://api-restfull-blogcc.herokuapp.com