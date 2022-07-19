import React from 'react';
import Aboutsection from './AboutPageComp/MainSection';
import Ourrecipes from './AboutPageComp/OurReceipes';
import Popularrecipes from './AboutPageComp/PopularRecipes';
import RearchRecipes from './AboutPageComp/SearchRecipes';

import { umysePagination } from '../TestFolder/Pagination';
import Search from '../TestFolder/Search';

export default function Aboutpage() {
  return (
    <>
      <Aboutsection/>
      <RearchRecipes/>
      <Ourrecipes/>
      <Popularrecipes/>
      

    </>
  );
}