import axios from "axios";
import urlApi from "../../services/urlApi";

export const apiFetchProjects = () => {
  return axios({
    method: "get",
    url: urlApi.users
  });
};
