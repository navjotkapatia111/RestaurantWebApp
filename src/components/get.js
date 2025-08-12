import axios from 'axios'

const config = {
    method:'get',
    maxBodyLength: Infinity,
    url:"http://localhost:5000/api/v1/router/get",
    headers:{
        Authorization: `Bearer ${token}`
    }
}
const {data} = axios.request(config)
console.log("....>>>>get",data)