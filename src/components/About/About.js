import React from "react";
import { Section } from "../styled-components";
import styles from './styles'
import bio from './aboutCopy'


const About = (props) => {
  return (
    <Section id="about" styles = {styles} height='100vh'>
      <div className='about'>
      <h2>About</h2>
      <p>{bio}</p>
      </div>

      <div className = 'img'></div>
    </Section>
  );
};

export default About;
