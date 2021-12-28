import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import About from "./About/About";
import Contact from "./Contact/Contact";
import {QuickGallery} from './Gallery'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Illustrator | Developer | Eddie Lopez | Fresno CA</title>

      </Helmet>
  

      <Header/>
      <QuickGallery
        title="recent works"
        array={['item','item','item','item']}
        link='all work >'/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
