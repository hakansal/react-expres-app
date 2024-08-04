import React from "react";
import "./kayit_css.css"

const Kayit=()=>{
    return <div className=" ">
         <div className="container">
            <div className="row">
                <div className="col-lg-8 d-flex justify-content-center align-items-center ">
                   <div className="home d-flex justify-content-center align-items-center flex-column">
                    <input className="p-2 my-3" name="email"type="email" placeholder="e mail adresiniz"></input>
                    <input className="p-2 my-3" name="username"type="username" placeholder="kullanıcı adız"></input>
                    <input className="p-2 my-3" name="password"type="password" placeholder="şifre"></input>
                    <button className="btn-c p-2">kayıt</button>
                    </div>    
                    
                 </div>
                <div className="col-lg-4 d-flex col-left justify-content-center align-items-center">
                    <h1>kayıt  <br/>oluşturma</h1>
                </div>
            </div>
         </div>
        
    </div>
}

export default Kayit;