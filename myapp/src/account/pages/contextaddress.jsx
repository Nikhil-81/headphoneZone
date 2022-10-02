import React, { useState } from "react"
import { createContext } from "react"
export const Addcontextaddress=createContext()
const initAddress={
    f_name:"",
    l_name:"",
    address:"",
    email:"",
    pin:"",
    default:false,
    id:Date.now()

}
export default function AddresscontextProvider({children}){
    const [add_no_diff,set_no_add]=useState([])
    const [add_diff,set_add]=useState()
    const [change,setchange]=useState(initAddress)
    const [show, setShow] = useState(false);
    function hendleChange(e){
        const {type,value,name,checked}=e.target
        if(type=="checkbox"){
            setchange({...change,[name]:checked})
        }

        else{
            setchange({...change,[name]:value})
        }
    }
    function hendlesubmit(e){
     e.preventDefault()
     
        console.log(change)
        if(change.default==true){
            set_add(change)
        }
        else{
            if(add_diff==undefined){
                setchange({...change,default:true})
                set_add(change)
            }
            else{
                set_no_add([...add_no_diff,change])
            }
        }
        
        setchange(initAddress)
        setShow(false)
    }
    console.log(change)
    return(
        <Addcontextaddress.Provider value={{hendlesubmit,hendleChange,show,setShow,add_no_diff,add_diff}}>
            {children}
        </Addcontextaddress.Provider>
    )
}

