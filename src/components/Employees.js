import React, { useEffect, useState } from 'react'


  
// const [Employees, setResult] = useState();

// useEffect(()=>{
//     async function getData(){
//         const res=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await res.json();
//         setResult(data);
//     }
//     getData();
//     console.log(Employees);
// },[]);

const Employees=[
    {
        id:"1",
        name:"suvendu",
        email:"suvendu@gmail.com"

    },
    {
        id:"2",
        name:"sipu",
        email:"sipu@gmail.com"

    },
    {
        id:"3",
        name:"shekhar",
        email:"shekhar@gmail.com"

    },

]

export default Employees;
