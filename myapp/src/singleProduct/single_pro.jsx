import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
function getData(id,name){
    return axios(`http://localhost:3004/${name}/${id}`)
}
export default function Single_pro(){
    const {id,name}=useParams()
    const [data,setdata]=useState([])
    useEffect(()=>{
        getData(id,name).then(res=>setdata(res.data)).catch(err=>console.log(err))
    },[])
    console.log(data)
    return (
        <div>hello</div>
    )
}