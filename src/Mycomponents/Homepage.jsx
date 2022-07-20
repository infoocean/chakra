import React,{useEffect} from 'react';
import Categeries from '../Mycomponents/Homepagecmp/Categaries';
import Deleciesrecipy from '../Mycomponents/Homepagecmp/Deleciesrecipy';
import Myreceipies from '../Mycomponents/Homepagecmp/Receipes';
//import Homepageslider from '../Mycomponents/Homepagecmp/Homepageslider';
import Banner from '../Mycomponents/Homepagecmp/Banner';
import Instragramsection from '../Mycomponents/Homepagecmp/Instragrammedia';
import { Inboxemail } from './Homepagecmp/Banner2';


export default function Homepage() {

  useEffect(() => {
    window.scroll(0,0);
  },[]);


  return (
    <>
      {/*<Homepageslider />*/}
      <Categeries />
      <Banner />
      <Myreceipies />
      <Instragramsection />
      <Deleciesrecipy />
      <Inboxemail/>
    </>
  );
}
