import axios from "axios"

function LOGINREQUEST(data){
    return axios.post("https://reqres.in/api/login",data).then(res=>LOGINSUCESS(res)).catch(err=>LOGINFAIL(err))
}

function LOGINSUCESS(res){
    return ({
        type:"sucess",
        payload:res.data.token
    })
}

function LOGINFAIL(err){
    return ({
        type:"fail",
        payload:""
    })
}

export {LOGINREQUEST}