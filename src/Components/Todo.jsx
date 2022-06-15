import React from 'react';
function Todo(){
    const [input,setInput] = React.useState("");
    const [todos,setTodos] = React.useState([]);


  React.useEffect(()=>{
    fetch(`http://localhost:3000/todos`)
    .then((res)=>res.json())
    .then((res)=>setTodos(res))
    .catch((err)=>console.log(err));
    

  },[])
  

   const AddTodo = () =>{
     const payload = {
         title:input,
         status:false
     }
     fetch(`http://localhost:3000/todos`,{
         method:"POST",
         body:JSON.stringify(payload),
         headers:{
             "content-type":"application/json"
         }
     })
     .then((res)=>res.json())        //data is stored on the page
     .then((res)=>console.log(res));
    }

    return (
        <>
       <input 
       placeholder="add something"
       value = {input}
       onChange = {(e)=>setInput(e.target.value)}/>
       <button onClick = {AddTodo}>ADD</button>
     <div className = "Table"> {todos.map((item)=>(
      <div className = "title"><h1>{item.title}</h1></div>
      ))}</div>


        </>
    )
}
export {Todo}