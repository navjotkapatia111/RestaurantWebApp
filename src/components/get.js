import axios from 'axios'

const config = {
    method:'get',
    maxBodyLength: Infinity,
    // url:"http://localhost:5001/api/v1/router/get",
    url:"restaurantwebapp-production.up.railway.app/api/v1/router/get",
    headers:{
        Authorization: `Bearer ${token}`
    }
}
const {data} = axios.request(config)
console.log("....>>>>get",data)