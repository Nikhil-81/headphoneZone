import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./logIn.css"
import { Addcontext } from '../context/context';
import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';




export default function Login(){

    const {hendleLogin,hendleChange,state}=useContext(Addcontext)


    return(
        <div className="LofInform" >
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name="email" onChange={hendleChange}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name="password" onChange={hendleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {/* <div className="LogIn_button" > */}
        {state.loding?  (<Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>):  <Button variant="primary" type="submit" onClick={hendleLogin} >
        Submit
      </Button>}
    
      <p><Link to="/creat_accout">Creat Account first</Link></p>
      {/* </div> */}
    </Form>
        </div>
    )
}