import axios from 'axios';
import * as endpoints from '../../api/endpoints';
import { baseURL } from '../../config/profileConfig/config';

export const getProfile = async () => {
  var response: any = null;

  const fetchData = async () => {
    await axios
      .get(`${endpoints.profile}`)
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        console.log(error);
        return window.location.replace(`${baseURL}/error`);
      });
  };
  await fetchData();
  return response;
};