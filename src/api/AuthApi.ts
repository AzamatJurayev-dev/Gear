import request from "../utils/httpClient";
import { ENDPOINTS } from "../utils/endpoint";


export const login =(payload : {username:string , password:string}) => {
    return request.post(ENDPOINTS.LOGIN, payload);
}