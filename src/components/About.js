import React from "react";
import { Section } from "./styled-components";

const styles = `
display:grid;
gap:3rem;
width:100%;
padding-left:5%;
grid-template-areas: 
' . . i'
' . . i'
' . . i'
' a a i';

& .about{
  grid-area:a;
  position:relative;
}

& .img{
  margin:auto;
  background:white;
  width:20rem;
  height: 80%;
  grid-area: i;
}
`
const About = (props) => {
  return (
    <Section id="about" styles = {styles} height='100vh'>
      <div className='about'>
      <h2>About</h2>
      <p>
        Eddie Lopez (Lalo) is a Chicano illustrator and web developer based in
        the San Joaquin valley. After studying illustration at the California
        College of the Arts in San Francisco, he went on to attend Lambda
        School’s fullstack web development program. Branding himself as both a
        creative and a developer, his ultimate goal is to work on projects where
        he can combine the two fields to create web solutions that are
        beautifully designed and impactful for users.
      </p>
      </div>

      <div className = 'img'></div>
    </Section>
  );
};

export default About;
