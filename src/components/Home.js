import React ,{useState}from 'react';
import './Body.css'
import Employees from './Employees';
import {Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

    let history=useNavigate();

    const handleEdit = (id, name, email) =>{
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("id", id);


    }

    const Deletedata=(id) =>{
        const index=Employees.map((e)=>{return (
            e.id
        )
        }).indexOf(id);
        console.log(index);
        Employees.splice(index,1)
    history('/');
    
    }

  return (
    <div  >
    <div style={{margin:"10rem"}}>

      <table className='tstyle'>
          <thead>
              <tr >
                  <th>
                      Name
                  </th>
                  <th> 
                      email
                  </th>
                  <th>
                    Action
                  </th>
              </tr>
          </thead>
          <tbody>
           {
            Employees && Employees.length > 0 
            ?
            Employees.map((item)=>{
                return(
                     <tr>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.email}
                        </td>
                        <td>
                           <Link to="/edit">
                           <button style={{backgroundColor:"green", color:"white"}} onClick={()=>handleEdit(item.id, item.name, item.email)}>Update</button>{" "} 
                           </Link>
                            <button style={{backgroundColor:"red", color:"white"}} onClick={()=> Deletedata(item.id)}>Delete</button>
                         
                        </td>
                     </tr>
                )
            }
            )
            :
            "data not found"
           }
          </tbody>
      </table>
      
     <Link to="/create" className='d-grid gap-2'>
      <Button size="lg">CREATE +</Button>
      </Link>
      
    </div>
  </div>
  )
}

export default Home
