import React from "react";
import { Helmet } from "react-helmet";
import About from "./About";
import Contact from "./ContactForm";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Illustrator | Developer | Eddie Lopez | Fresno CA</title>

      </Helmet>
      <div id='top'></div>

      <div>Header</div>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
