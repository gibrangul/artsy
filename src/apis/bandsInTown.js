import axios from "axios";

export default axios.create({
  baseURL: "https://rest.bandsintown.com/",
  params: {
    app_id: "aaa",
  },
});
