import React, { useState } from "react"
import { useReducer } from "react"
import { LOGINREQUEST } from "../reducer/action"
import reduce from "../reducer/reducer"
export const Addcontext=React.createContext()

const initform={
    email:"",
    password:""
}

const initstate={
    name:"Nikhil",
    token:"",
    isauth:false,
    iseror:false,
    loding:false

}
export default function Contextprovider({children}){


    const [change,setchange]=useState(initform)
    const [state,dispatch]=useReducer(reduce,initstate)
function hendleChange(e){
    const {type,name,value}=e.target
    setchange({...change,[name]:value})
}
    function hendleLogin(event){
        event.preventDefault()
        // console.log(change)
        dispatch({type:"loding"})
        LOGINREQUEST(change).then((res)=>dispatch(res)).catch(err=>dispatch(err))
    }



    return (
        <div>
                <Addcontext.Provider value={{hendleLogin,hendleChange,state }  }>
                    {children}
                </Addcontext.Provider>
        </div>
    )
}