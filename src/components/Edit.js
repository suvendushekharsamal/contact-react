import {v4 as uuid} from "uuid";  
import { Button,Form } from "react-bootstrap";
import Employees from "./Employees";
import {Link ,useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import './Body.css'


const Edit = () => {
    const[name, setName] = useState('');
    const[email, setEmail]= useState('');
    const[id, setId]= useState('');

    let history = useNavigate();

    var index = Employees.map((e)=> e.id).indexOf(id);

    const handelSubmit=(e) =>{
        e.preventDefault();
        
       let a = Employees[index];
       a.name=name;
       a.email=email;
     

        history("/")

    }
    useEffect(()=>{ 

         setName(localStorage.getItem('name'));
         setEmail(localStorage.getItem('email'));
         setId(localStorage.getItem('id'));

    },[])

  return (
    <div>
        <form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="Add" controlId="formName" >
                    <Form.Control className="Add" type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                <Form.Group className="Add" controlId="formName">
                    <Form.Control className="Add" type="text" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)}>  
                    </Form.Control>
                </Form.Group>
                 <Button onClick={(e) => handelSubmit(e)} type="submit">submit</Button>
            </form>
    </div>
  )
}

export default Edit
