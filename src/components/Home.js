import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import About from "./About";
import Contact from "./ContactForm";
import QuickGallery from './QuickGallery'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Illustrator | Developer | Eddie Lopez | Fresno CA</title>

      </Helmet>
      <div id='top'></div>

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
