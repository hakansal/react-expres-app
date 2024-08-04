import React from "react";
import "./todo.css";
const Todo=()=>{
    const show=()=>{
    document.getElementById("textarea").style.display="block";
    }
    return <div className="todo">
        <div className="todo-main container d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column  list   "> 
             <input type="text" 
             placeholder="başlık" 
             className="p-2 todoinputs"
             onClick={show}/>
  
  
             <textarea
             id="textarea"
              type="text" 
              placeholder="note"
              className="p-2 todoinputs"/>
             <button className="home-btn p-2">ekle</button>
             
             </div>
        </div>


    </div>
}

export default Todo;