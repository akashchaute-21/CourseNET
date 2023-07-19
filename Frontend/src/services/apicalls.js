import axios from "axios"

export const axiosInst = axios.create({});

export const apicalls = (method,url,body,header,params)=>{
    return axiosInst({
        method:`${method}`,
        url: url,
        data: body? body:null,
        header:header?header:null,
        params: params? params:null
    })
}