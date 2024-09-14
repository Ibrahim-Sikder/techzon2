import { instance } from "@/axios/axiosInstance";
import { authKey } from "@/constant/authkey";
import { decodedToken } from "@/utils/decodedToken";
import { removeFromLocalStorage } from "@/utils/local.storage";
import { getFromLocalStorage } from "@/utils/local.storage";
import { setToLocalStorage } from "@/utils/local.storage";


export const storeUserInfo = ({accessToken}:{accessToken:string})=>{
   
    return setToLocalStorage(authKey, accessToken)

}


export const getUserInfo = () =>{
    const authToken = getFromLocalStorage(authKey)
    if(authToken){
        const decodedData:any = decodedToken(authToken);
        return {
            ...decodedData,
            role: decodedData?.role.toLowerCase()
        }
    }

    return authToken;
}

export const isLoggedIn = ()=>{
    const authToken = getFromLocalStorage(authKey);
    if(authToken){
        return !!authToken
    }
}

export const removeUser = ()=>{
    return removeFromLocalStorage(authKey)
}

export const getNewAccessToken = async()=>{
    return await instance({
        url: 'http://localhost:5000/api/v1/auth/refresh-token',
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    })
}