import {Route, Routes} from "react-router-dom"
import UserAccount from "../account/account"
import Cart from "../cart/cart"

import Home from "../homepage/Home"
import Login from "../login/Login"
import Products from "../products/Products"
import SingIn from "../singIn/singIn.jsx"
import Single_pro from "../singleProduct/single_pro"
export default function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/:name"} element={<Products/>} />
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/creat_accout"} element={<SingIn/> } />
                <Route path={"/user"} element={<UserAccount/>} />
                <Route path={"/:name/:id"} element={<Single_pro/>} />
                <Route path={"/cart"} element={<Cart/>} />
                
            </Routes>
        </div>
    )
}
