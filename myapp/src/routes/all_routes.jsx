import {Route, Routes} from "react-router-dom"
import Home from "../homepage/Home"
import Products from "../products/Products"
export default function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/:name"} element={<Products/>} />
            </Routes>
        </div>
    )
}
