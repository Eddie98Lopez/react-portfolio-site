import React from "react";
import { Helmet } from "react-helmet";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Illustrator | Developer | Eddie Lopez | Fresno CA</title>
      </Helmet>

      <div>Header</div>
      <About/>
      <div>Contact</div>
    </div>
  );
};

export default Home;
