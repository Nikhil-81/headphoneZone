import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Overlay_Category,Overlay_Brands  } from '../../dropdowns/nav_dropdowns/Nav_dropdowns';
import menu from "../../image/hamburgur.png"
import "./nav_overlay.css"
export default function Nav_overlay() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div  className="nav_overlay" >
      <img src={menu}  onClick={handleShow} className="me-2" />
      <Offcanvas show={show} onHide={handleClose} placement="start" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h4 Style={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;padding:0.2rem;text-align:center"} >Account</h4>
        <br/>
        <h4 Style={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;padding:0.2rem;text-align:center"} >SingUp</h4>
        <br/>
        <Overlay_Category/>
        <br/>
        <Overlay_Brands/>
        <br/>
        <h4 Style={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;padding:0.2rem;text-align:center"} ><Link to="/cart" >Cart</Link></h4>
        <br/>
        <h4 Style={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;padding:0.2rem;text-align:center"} >Contant us</h4>
        <br/>
        <h4 Style={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;padding:0.2rem;text-align:center"} >Logout</h4>
        
      
       

        
        </Offcanvas.Body>
        
        
      </Offcanvas>
    </div>
  );
}



// render(<OffCanvasExample/>);