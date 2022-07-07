import React from 'react';
import Categeries from '../Mycomponents/Homepagecmp/Categaries';
import Deleciesrecipy from '../Mycomponents/Homepagecmp/Deleciesrecipy';
import Myreceipies from '../Mycomponents/Homepagecmp/Receipes';
//import Homepageslider from '../Mycomponents/Homepagecmp/Homepageslider';
import Banner from '../Mycomponents/Homepagecmp/Banner';
import Instragramsection from '../Mycomponents/Homepagecmp/Instragrammedia';

export default function Homepage() {
  return (
    <>
      {/*<Homepageslider />*/}
      <Categeries />
      <Banner />
      <Myreceipies />
      <Instragramsection />
      <Deleciesrecipy />
    </>
  );
}
