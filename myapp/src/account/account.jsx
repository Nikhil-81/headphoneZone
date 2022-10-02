import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Add from "../logo_pic/logo/add.svg"
import "./account.css"

import Tab from 'react-bootstrap/Tab';
import { useState } from 'react';

import Address from './pages/address';
import Call from './pages/call';
import Profile from './pages/profile';
import Order from './pages/order';

function hendleShow(data){
   switch (data){
      case "Profil":
         return (<Profile/>)
         case "Contect Us":
         return (<Call/>)
         case "Address":
         return (<Address Add={Add} />)
         case "My Orders":
         return (<Order/>)
   }
}

export default function UserAccount(){
   const [Actag,settag]=useState("Profil")
function hendleActive(e){
   settag(e.target.textContent)
}


   return(
    <div className='Account_box' >
  <Container>
      <Row>
        <Col   xl={4} md={14} sm={12}> 

        <div className='accountsidebar' >
<Container><Row  >
         <Col xl={12} md={3}  sm={3}  ><h5   onClick={(e)=>hendleActive(e)}  className={Actag=="Profil"?"activestyle":"nonActivestyle"} >Profil</h5></Col>
         <Col xl={12} md={3}  sm={3} ><h5    onClick={(e)=>hendleActive(e)} className={Actag=="Contect Us"?"activestyle":"nonActivestyle"}  >Contect Us</h5></Col>
         <Col xl={12} md={3}  sm={3} ><h5    onClick={(e)=>hendleActive(e)} className={Actag=="My Orders"?"activestyle":"nonActivestyle"}  >My Orders</h5></Col> 
         <Col xl={12} md={3}  sm={3} ><h5    onClick={(e)=>hendleActive(e)} className={Actag=="Address"?"activestyle":"nonActivestyle"}  >Address</h5></Col> 
   </Row></Container>
        </div>
   </Col>    
         <Col  xl={8} md={12} sm={12}>  
         <div className="accountDisplay" >
 {hendleShow(Actag)}
         </div>
         
          </Col>
      </Row>
      </Container>

    </div>
   )
}