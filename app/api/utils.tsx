import { apiUrl } from "./settings";
import axios from 'axios';

export async function getTimes (date:any = null) {
    try {
        const response = await axios.get(apiUrl(1).concat(`/times/get/${date}`));
        return response.data
    } catch (error) {
        return null
    }
};

export async function getShop (status:any = null) {
    let url
    if (status !== null) {
        url = `/shop/get?status=${status}`
    } else {
        url =  `/shop/get`
    }

    try {
        const response = await axios.get(apiUrl(1).concat(url));
        return response.data
    } catch (error) {
        return null
    }
};