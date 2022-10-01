import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./sing.css"
export default function SingIn(){
    return (
        <div  className='SingInForm' >
            <h1>Ragister</h1>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Creat Account
      </Button>
    </Form>
        </div>
    )
}