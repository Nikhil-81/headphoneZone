import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import UncontrolledExample from "./hero_cero"
import "./pro.css"
import Product_card from "./product_card"
import SideBar from "./sidebar"
import Card from 'react-bootstrap/Card';
// url=`http://localhost:3004/${params.name}?mrp_gte=10000&mrp_lte=20000&_limit=2`
function getpro(name,order_by,sort_by,low,high){
    let url
   if(order_by!=""){
    url=`http://localhost:3004/${name}?_sort=${sort_by}&_order=${order_by}`

   }
  if(order_by!="" && low!="" && high!=""){
    url=`http://localhost:3004/${name}?sale_price_gte=${low}&sale_price_lte=${high}&_sort=${sort_by}&_order=${order_by}`
   }
   else if(low!="" && high!=""){
    url=`http://localhost:3004/${name}?sale_price_gte=${low}&sale_price_lte=${high}`
   }
   else if(order_by==""){
    url=`http://localhost:3004/${name}`
   }
    return axios.get(url)

}
export default function Products(){
    const params=useParams()
   const [order_by,setorder_by]=useState("")
   const [sort_by,setsort_by]=useState("")
   const [data,setdata]=useState([])
   let [arr_a,setarr_a]=useState([])
   let [arr_b,setarr_b]=useState([])
   let [low,setlow]=useState("")
   let [high,sethigh]=useState("")
    let [brand_fill,setbrandfilter]=useState("")



    useEffect(()=>{
        getpro(params.name,order_by,sort_by,low,high).then(res=>setdata(res.data)).catch(err=>console.log(err))
        // console.log(url)
    },[params.name,order_by,sort_by,low,high,brand_fill])
    

function prepare_Sort(val){
    if(val==""){
        setorder_by("")
        setsort_by("")
    }
    else if(val=="lth"){
        setorder_by("asc")
        setsort_by("sale_price")

    }
    else if(val=="htl"){
        setorder_by("desc")
        setsort_by("sale_price")


    }
    else if(val=="az"){
        setorder_by("asc")
        setsort_by("title")
        
    }
    else if(val=="za"){
        setorder_by("desc")
        setsort_by("title")
    }
}

    return (
        <div>
            <UncontrolledExample/>
          
             <div className="pro_body" >
                <div>
                    <SideBar Minval={low} Maxval={high} hendleLow_price={(e)=>setlow(e)} hendlehigh_price={(e)=>sethigh(e)} hendlebrand={(e)=>setbrandfilter(e)} />
                </div>
                <div> 
                 <div className="procard_deco" >
                 <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Sennheiser-HD650-Mini-banner_580x.jpg?v=1664182155" alt="Card image" />
      <Card.ImgOverlay className="overlay_title" >
        <h5 className="product_page_branding" >REVISET THE CLASSIC!</h5>
      
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.shopify.com/s/files/1/0153/8863/files/beginner-headphones-mini-bannners-3_580x.jpg?v=1652248340" alt="Card image" />
      <Card.ImgOverlay  className="overlay_title">
        <h5 className="product_page_branding" >MELODIC & PURE!</h5>
      
      </Card.ImgOverlay>
    </Card>
                 </div>
                 <div className="sort_box" >
        <label>Sort By:</label>
                    <select className="Sort_pro" onChange={(e)=>prepare_Sort(e.target.value)}>
                        <option value="" >Fetured</option>
                        <option value="lth" >Price-Low-to-High</option>
                        <option value="htl" >Price_High_to_Low</option>
                        <option value="az" >Sort IN A-Z</option>
                        <option value="za" >Sort IN Z-A</option>
                    </select>
            </div>
            <div className="pro_card_con">
            {data && data.map(el=>
            { return (
                <Link to={`/${params.name}/${el.id}`} className="proCard_link" >
                <Product_card pro_image={el.image_a}
                pro_title={el.title}  mrp_price={`MRP:${el.mrp}`} 
                selling_price={`selling price:${el.selling_price}`} 
                sell_price={`sell price:${el.sale_price}`} revievs={`${el.reviews} reviews`}  />
                </Link>
                )  })}
            </div>
            </div>
                </div>   
        </div>
    )
}