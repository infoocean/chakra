import React from 'react';
import {Routes,Route,} from "react-router-dom";
import Aboutpage from '../Mycomponents/Aboutpage';
import Blogpage from '../Mycomponents/Blogpage';
import Contactpage from '../Mycomponents/Contactpage';
import Homepage from '../Mycomponents/Homepage';
import Recipespage from '../Mycomponents/Recipespage';

export default function Myroutes(){
  return (
    <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/recipes" element={< Recipespage/>}/>
        <Route path="/blogs" element={< Blogpage/>}/>
        <Route path="/contact" element={< Contactpage/>}/>
        <Route path="/aboutus" element={< Aboutpage/>}/>
    </Routes>
  );
}


 