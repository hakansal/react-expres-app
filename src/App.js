import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from"./components/home/home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Abaout from "./components/about/about";
import Kayit from"./components/kayit/kayit";
import Giris from "./components/kayit/giris";
import Todo from "./components/todo/todo";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
       <Routes>
         <Route exact path="/home" element={<Home/>}/>
         <Route exact path="/giris" element={<Giris/>}/>
         <Route exact path="/kayit" element={<Kayit/>}/>
         <Route exact path="/hakk" element={<Abaout/>}/>
         <Route exact path="/cikis" element={<Home/>}/>
         <Route exact path="/todo" element={<Todo/>}/>
       

       </Routes>

      </Router>
      
       
    </div>
  );
}

export default App;
