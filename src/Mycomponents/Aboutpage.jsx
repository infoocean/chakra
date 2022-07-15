import React from 'react';
import Aboutsection from './AboutPageComp/MainSection';
import Ourrecipes from './AboutPageComp/OurReceipes';
import Popularrecipes from './AboutPageComp/PopularRecipes';
import RearchRecipes from './AboutPageComp/SearchRecipes';

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