import { add_cart_context } from "./cart_context"
import { useContext } from "react"
import "./cart.css"
import Address from "../account/pages/address"


export default function Cart(){
    const {cart,hendleQTY_add,hendleQTY_red,hendleRemove} =useContext(add_cart_context)
    return (
        <div>

        <div>
            <table>

             <tr>
    <th>Item</th>
    <th>Quantity</th>
    <th>Price</th>
  </tr>
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
                <button onClick={()=>hendleRemove(el)} >Remove</button>
            </td>
        </tr>))}
        
            </table>
        </div>
       
                </div>
    )
}