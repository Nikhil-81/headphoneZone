import { add_cart_context } from "./cart_context" 
import { useContext } from "react"
import "./cart.css"
import Address from "../account/pages/address"
import { Addcontext } from "../context/context"
import {Link} from 'react-router-dom'


export default function Cart(){
   const {state}=useContext(Addcontext)
    const {cart,hendleQTY_add,hendleQTY_red,hendleRemove} =useContext(add_cart_context)
    if(cart.items[0]==undefined){
        return(<h1>Plz add some to your cart</h1>)
    }
    return (
 <div className="cart_box">
        <div className="g1">
            <table>

             <tr className="tableheaders">
    <th>Item</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Remove</th>

  </tr>
  <div className="BottomLine" ></div>

{cart.items.map(el=>(<tr className="cart_item" >
    <td>
            
                <img src={el.image_a} className="cart_pro_img" />
                <p>{el.title}</p>
            </td>
            <td>
        
                <div className="cart_qty_button">
                <button  disabled={el.qty==1} onClick={()=>hendleQTY_red(el)} >-</button>
                <p>{el.qty}</p>
                <button   disabled={el.qty==5} onClick={()=>hendleQTY_add(el)} >+</button>
                </div>
            </td>
            <td>
     
                <p>{el.sale_price}€</p>
            </td>
            <td className="Remove_button">
            <button onClick={()=>hendleRemove(el)} >Remove</button>
            </td>
        </tr>))}
        
            </table>

        </div>
        <div className="BottomLine" ></div>
        <div className="PriceDetils g2">
            <p>Discount:<b>0</b></p>
            <p>Dilivery:<b>0</b></p>
            <p>SubTotal: <b>{cart.price}</b>  </p>
            <p>SubTotal:<b>{cart.price}</b></p>

        </div>
        <div  className="g3">
            <Link to="/"><button>Checkout</button></Link>
        </div>
 </div>
    )
}