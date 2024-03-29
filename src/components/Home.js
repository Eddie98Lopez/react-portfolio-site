import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import About from "./About/About";
import Contact from "./Contact/Contact";
import {QuickGallery} from './Gallery'
import HeaderLettering from "./Header/HeaderLettering";
import { keywords } from "../utils";
import { useStore } from "../utils/store/StoreProvider";

const Home = () => {
  const {projects} = useStore().store
  return (
    <div>
      <Helmet>
        <title>Illustrator | Developer | Eddie Lopez | Fresno CA</title>
        <meta name='keywords' content={keywords}/>
        <meta name='description' content='illustrator and react.js web developer in Fresno, CA looking for work. UX/UI and graphic design portfolio. Based in San Joaquin valley. Attended Lambda School and California College of the Arts.'/>

      </Helmet>
  
      <Header/>
      <HeaderLettering/>
      
      {projects.length>0 && (<QuickGallery
        title="recent works"
        array={projects}/>)}
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
