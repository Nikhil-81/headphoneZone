import React, { createContext, useContext, useReducer } from "react"
import Alert from 'react-bootstrap/Alert';
import {add_to_cart,hendleAdd, hendleReduce,hendleRemoveitem} from "./action" 
import cart_reducer from "./reducer"
export const add_cart_context=createContext()
let init_cart={
    items:[],
    id:[],
    price:0
}
function already(){
    return (
        <Alert variant="success">
        <Alert.Heading>This item already added to Cart</Alert.Heading>
     
      </Alert>
    )
}
export default function Cart_context_Provider({children}){
    const [cart,cart_dispatch]=useReducer(cart_reducer,init_cart)
    function hendle_cart_click(item){
        if(cart.id.includes(item.id)){
            alert("This item already added to Cart")
        }
        else{
            
           cart_dispatch(add_to_cart(item)) 
        }
  

    }
    function hendleQTY_add(el){
        cart_dispatch(hendleAdd(el))
    }
    function hendleQTY_red(el){
        cart_dispatch(hendleReduce(el))
    }
    function hendleRemove(el){
        cart_dispatch(hendleRemoveitem(el))
    }

    
    return (

        <add_cart_context.Provider value={{hendle_cart_click,cart,hendleQTY_add,hendleQTY_red,hendleRemove}}>
            {children}
        </add_cart_context.Provider>
    )
} 