import React,{useState} from 'react'
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import {add} from './Todo'

function AddTask(){
    const todo= useSelector((state)=>state.todos)
    console.log(todo);
    const Dispatch=useDispatch()
    //Récupération des state de la barre de recherche
    const [input,setInput]=useState('')
    console.log(input);
    const handleAdd=()=>{
        Dispatch(add(input))
    }

    return(       
        <div  className="d-flex justify-content-center p-2 mb-3" style={{gap:"1em"}}>
        <input placeholder="Saisir la description" onChange={(e)=>setInput(e.target.value)}></input>
        <Button variant="primary" onClick={()=>handleAdd()}> Add New Task</Button>
        </div>
    )
}
export default AddTask