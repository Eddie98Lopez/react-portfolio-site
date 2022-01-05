import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import About from "./About/About";
import Contact from "./Contact/Contact";
//import {QuickGallery} from './Gallery'
import HeaderLettering from "./Header/HeaderLettering";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Illustrator | Developer | Eddie Lopez | Fresno CA</title>

      </Helmet>
  
      <Header/>
      <HeaderLettering/>
      
{/*       <QuickGallery
        title="recent works"
        array={['item','item','item','item']}/> */}
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
