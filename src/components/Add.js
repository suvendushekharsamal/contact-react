import {v4 as uuid} from "uuid";  
import { Button,Form } from "react-bootstrap";
import Employees from "./Employees";
import {Link ,useNavigate} from 'react-router-dom'
import { useState } from "react";
import './Body.css'

function Add(){
    const[name, setName] = useState('');
    const[email, setEmail]= useState('');
    
    let history =useNavigate();

    const handelSubmit=(e) =>{
        e.preventDefault();
        
        const ids= uuid();
        let uniqueId = ids.slice(0,8);

        let a=name;
        let b=email;
          console.log(a +" "+b)
        Employees.push({id: uniqueId, name:a, email:b});

        history("/")

    }
    return(
        <div>
            <form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="Add" controlId="formName" >
                    <Form.Control className="Add" type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <Form.Group className="Add" controlId="formName">
                    <Form.Control className="Add" type="text" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                 <Button onClick={(e) => handelSubmit(e)} type="submit">submit</Button>
            </form>
        </div>
    )

}
export default Add;