import axios from "axios"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import "./single.css"
import { add_cart_context } from "../cart/cart_context";



function getData(id,name){
    return axios(`http://localhost:3004/${name}/${id}`)
}
export default function Single_pro(){
    const {id,name}=useParams()
    const [data,setdata]=useState([])
    const {hendle_cart_click}=useContext(add_cart_context)
    useEffect(()=>{
        getData(id,name).then(res=>setdata(res.data)).catch(err=>console.log(err))
      },[])
    console.log(data)
    return (

        <div className="single_proCon" >
              <Container >
      <Row  >
        <Col xl={7} md={6} >

<Carousel  className="single_pro_box" variant="dark">

      {data.image_arr && data.image_arr.map(el=>(
          
          
          <Carousel.Item>
            <div className="sindle_proCero" >
        <img 
          className="d-block w-100 pro_singleImagae "
          src={el}
          alt="First slide"
        />
    </div>
      </Carousel.Item>
      ))}
</Carousel>


        </Col>

        <Col xl={5} md={6} className="single_pro_col">
         <div className="Info_con" >
        <p><b>{data.brand}</b></p>
        <h1><b>{data.title}</b></h1>
        <p>In-Ears With 1 Dynamic Driver</p>
        <p><s>MRP Price:{data.mrp}</s></p>
        <p><s>Selling Price:{data.selling_price}</s></p>
        <span Style={"Display:flex;justify-content:center"} ><p>Fastival of Sound Price :</p><h3 className="SellPrice" >Sell Price:{data.sale_price}</h3> </span>
        <p>Or ₹ 533 (Simpl/Axio/Bajaj/Zest/Cards) </p>
        <p>Includes GST of ₹ 244 </p>
         <button onClick={()=>hendle_cart_click(data)} className="AdDCart_button" >Add To Card</button>
        </div>
       
        </Col>
      </Row>
    </Container>
        </div>
    )
}