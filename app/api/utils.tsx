import { apiUrl } from "./settings";
import axios from 'axios';

export async function getTimes () {
    try {
        const response = await axios.get(apiUrl(1).concat(`/times/get`));
        return response.data
    } catch (error) {
        return null
    }
};