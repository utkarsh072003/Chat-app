import axios from "axios";
import { HOST } from "@/utils/Constant";



 export const apiClient= axios.create({
    baseURL:HOST,
})

