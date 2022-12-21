
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./Nav_dropdown.css"
import Modal from 'react-bootstrap/Modal';
import Category_data from '../../cetogory/category';
import Overlay_Sponser from '../../brands/brands';

export const Overlay_Category=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
<div Style={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;padding:0.2rem"} >
        <h3 Style={"text-align:center"} onClick={handleShow} >Category</h3>

      <Modal show={show} onHide={handleClose} fullscreen="xxl-down">
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Category_data hendleModal_close={handleClose}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export const Overlay_Brands=()=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  
    return (
      <div Style={"box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;padding:0.2rem"} >
        <h3 Style={"text-align:center"} onClick={handleShow} >Brands</h3>
  
        <Modal show={show} onHide={handleClose} fullscreen="xxl-down">
          <Modal.Header closeButton>
            <Modal.Title>Brands</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Overlay_Sponser/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }


      