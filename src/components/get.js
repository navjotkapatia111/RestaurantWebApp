import axios from 'axios'

const config = {
    method:'get',
    maxBodyLength: Infinity,
    url:"https://restaurant-web-app-gxyi.vercel.app/api/v1/router/get",
    headers:{
        Authorization: `Bearer ${token}`
    }
}
const {data} = axios.request(config)
console.log("....>>>>get",data)