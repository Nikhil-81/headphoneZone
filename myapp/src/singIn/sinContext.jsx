import React, { useState } from "react"
import { useReducer } from "react"
import { Navigate } from "react-router-dom"

export const AddSingcontext=React.createContext()


export default function SingContextprovider({children}){

    const initform={
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        cell:""
      }
      
      function reduce(userstate,action){
        switch (action.type){
          case "firstname":
            return({...userstate,firstname:action.payload})
      
          case "lastname":
            return({...userstate,lastname:action.payload})
      
          case "email":
            return({...userstate,email:action.payload})
      
          case "password":
              return({...userstate,password:action.payload})
      
              case "cell":
                return({...userstate,cell:action.payload})
              
        }
      }

      const [userstate,dispatch]=useReducer(reduce,initform)
      function hendlechange(e){
        const {type,name,value,checked}=e.target
    
    
       
          
          dispatch({type:name,payload:value})
        
      }
      function hendleSubmit(e){
        e.preventDegault()
        // dispatch({type:"isloding"})

        
      }
    return (
        <div>
                <AddSingcontext.Provider value={{hendlechange,userstate,hendleSubmit}  }>
                    {children}
                </AddSingcontext.Provider>
        </div>
    )
}