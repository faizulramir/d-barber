import { apiUrl } from "../settings";
import axios from 'axios';

export default async function getToken (email:any, password:any) {
  try {
    const response = await axios.post(apiUrl(1).concat(`/tokens/create?email=${email}&password=${password}`));
    if (response.data.status == "OK") {
      return response.data
    }
  } catch (error) {
    return null
  }
};