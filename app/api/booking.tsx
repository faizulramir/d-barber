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

export async function getBooking (phone:any = null) {
    let url
    if (phone) {
        url = `/booking/get/${phone}`
    } else {
        url = '/booking/get/all'
    }
    try {
        const response = await axios.get(apiUrl(1).concat(url));
        return response.data
    } catch (error) {
        return null
    }
};

