import React from 'react';
import {Routes,Route,} from "react-router-dom";
import Aboutpage from '../Mycomponents/Aboutpage';
import Blogpage from '../Mycomponents/Blogpage';
import Blogpostpagedetails from '../Mycomponents/Blogpagecmp/Getrecipesblogdetails';
import Blogpostpage from '../Mycomponents/Blogpostpage';
import Contactpage from '../Mycomponents/Contactpage';
import Homepage from '../Mycomponents/Homepage';
import AllCategeries from '../Mycomponents/Homepagecmp/ShowAllCategories';
import CategoriesByRecipes from '../Mycomponents/Homepagecmp/ShowCategoriesByRecipes';
import Recipesdetailspage from '../Mycomponents/Receipspagecmp/Recipesdetails';
import Recipespage from '../Mycomponents/Recipespage';

export default function Myroutes(){
  return (
    <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/ShowAllCategories" element={<AllCategeries />}/>
        <Route path="/ShowCategoriesByRecipes/:id" element={<CategoriesByRecipes />}/>
        <Route path="/recipes" element={< Recipespage/>}/>
        <Route path="/blogs" element={< Blogpage/>}/>
        <Route path="/getrecipesblogdetails/:id" element={< Blogpostpagedetails/>}/>
        <Route path="/contact" element={< Contactpage/>}/>
        <Route path="/aboutus" element={< Aboutpage/>}/>
        <Route path="/blogpost" element={< Blogpostpage/>}/>
        <Route path="/getrecipesdetails/:id" element={< Recipesdetailspage/>} />
 

    </Routes>
  );
}


 