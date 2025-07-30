import axios from "axios";

    const updatedata = {
        name,email
    } 

    let data = updatedata

    let config = {
        method:"put",
        url: "http://localhost:5001/api/v1/router/put",
        headers:{},
        data:data
    }

    try{
        const {data} = await axios.request(config)
        console.log("...>>>put",data)
    }
    catch(error){
        console.log(error.data.message)
    }
