import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import UncontrolledExample from "./hero_cero"
import "./pro.css"
import Product_card from "./product_card"
// url=`http://localhost:3004/${params.name}?brand=&mrp_gte=10000&mrp_lte=20000&_limit=2`
function getpro(name){
    let url=`http://localhost:3004/${name}`
    return axios.get(url)

}
export default function Products(){
    const params=useParams()
   const [order_by,setorder_by]=useState("")
   const [sort_by,setsort_by]=useState("")
   const [data,setdata]=useState([])


    useEffect(()=>{
        getpro(params.name).then(res=>setdata(res.data)).catch(err=>console.log(err))
        // console.log(url)
    },[params.name])
    
    return (
        <div>
            <UncontrolledExample/>
            <div className="sort_box" >
        <label>Sort By:</label>
                    <select className="Sort_pro" onChange={(e)=>console.log(e.target.text)}>
                        <option value="" >Fetured</option>
                        <option value="asc" >Price-Low-to-High</option>
                        <option value="desc" >Price_High_to_Low</option>
                        <option value="asc" >Sort IN A-Z</option>
                        <option value="desc" >Sort IN Z-A</option>
                        <option value="true" >BestSeller</option>
                    </select>
            </div>
                
            <div className="pro_card_con">
            {data && data.map(el=>(<Product_card pro_image={el.image_a} mrp_price={`MRP:${el.mrp}`} selling_price={`selling price:${el.selling_price}`} sell_price={`sell price:${el.sale_price}`} revievs={`${el.reviews} reviews`} />))}
            </div>
        </div>
    )
}