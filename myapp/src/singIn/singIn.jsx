import { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./sing.css"
import { AddSingcontext } from './sinContext';
import { useContext } from 'react';
export default function SingIn(){

  const {hendlechange,userstate,hendleSubmit} =useContext(AddSingcontext)
    return (
        <div  className='SingInForm' >
            <h1>Ragister</h1>
            <Form onSubmit={(e)=>hendleSubmit(e)}  >
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="First Name" name="firstname" onChange={(e)=>hendlechange(e)}  />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Last Name" name="lastname" onChange={(e)=>hendlechange(e)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="phone Number" name="cell" onChange={(e)=>hendlechange(e)}  />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>hendlechange(e)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"  name="password" onChange={(e)=>hendlechange(e)} />
      </Form.Group>


      <Button variant="primary" type="submit">
        Creat Account
      </Button>
    </Form>
        </div>
    )
}