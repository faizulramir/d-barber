import { apiUrl } from "./settings";
import axios from 'axios';

export async function postBooking (data:any) {
  try {
        const response = await axios.post(apiUrl(1).concat(`/booking/post`), {
            name: data.name,
            phone: data.phone,
            b_date: data.b_date,
            b_time: data.b_time
        });

        return response.data
    } catch (error) {
        return null
    }
};

export async function getBooking (phone:any) {
    try {
        const response = await axios.get(apiUrl(1).concat(`/booking/get/${phone}`));
        return response.data
    } catch (error) {
        return null
    }
};