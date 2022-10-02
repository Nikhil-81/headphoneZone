
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Addcontextaddress } from './contextaddress';
import { useContext } from 'react';
export default function Address({Add}){
    const {hendlesubmit,hendleChange,show,setShow,add_no_diff,add_diff,set_add,set_no_add}=useContext(Addcontextaddress)
    function hendleChangeDefault(e){
      

    }
    return(
        <>
    <Modal
    fullscreen={true}
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-100w"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="Text" placeholder="First Name" name="f_name"onChange={(e)=>hendleChange(e)}  />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="Text" placeholder="Last Name" name="l_name"onChange={(e)=>hendleChange(e)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="Text" placeholder="Email"  name="email"onChange={(e)=>hendleChange(e)}/>
        
      </Form.Group>  <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <Form.Control type="Text" placeholder="Address" name="address"onChange={(e)=>hendleChange(e)} />
        
      </Form.Group>  <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="Text" placeholder="PinCoad" name="pin" onChange={(e)=>hendleChange(e)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Set to default" name="default" onChange={(e)=>hendleChange(e)} />
      </Form.Group>

      <Button variant="primary" onClick={(e)=>hendlesubmit(e)}  >
        Submit
      </Button>
    </Form>
      </Modal.Body>
    </Modal>
    <Container  >
<Row>
<Col>
<div className='AddNew_address'>

        <img src={Add} onClick={() => setShow(true)} />
        <label>Add new Address</label>
</div>
</Col>
<Col>
        {add_diff!=undefined?(
            <div className="address_block">
                <p><b>Default</b></p>
                <div>

                <p>First-Name:{add_diff.f_name}</p>
                <p>Last-Name:{add_diff.l_name}</p>
                <p>Email:{add_diff.email}</p>
                <p>Address:{add_diff.address}</p>
                <p>Pincoad:{add_diff.pincoad}</p>
                
                </div>
            </div>
        ):<div></div>}
</Col>
</Row>
<hr/>
<Row>

    
            {add_no_diff && add_no_diff.map(el=>(<Col  >
            <div onClick={e=>hendleChangeDefault(e)} className="address_block" >

<p>First-Name:{el.f_name}</p>
<p>Last-Name:{el.l_name}</p>
<p>Email:{el.email}</p>
<p>Address:{el.address}</p>
<p>Pincoad:{el.pincoad}</p>

</div>
            </Col>))}
            
</Row>
      
    </Container>
    

          </>
    )
}