import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
        <Overlay_Category/>
        <br/>
        <Overlay_Brands/>
        <br/>
        
        </Offcanvas.Body>
        
        
      </Offcanvas>
    </div>
  );
}



// render(<OffCanvasExample/>);