import React from "react";
import { Section, ImageContainer } from "../styled-components";
import styles from './styles'
import bio from './aboutCopy'
import aboutMe from '../../assets/aboutMe.jpg'


const About = (props) => {
  return (
    <Section id="about" styles = {styles} height='100vh'>
      <div className='about'>
      <h2>About</h2>
      <p>{bio}</p>
      </div>

      <ImageContainer height="100%" width='auto' className = 'img'><img src={aboutMe} alt='bio_pic'/></ImageContainer>
    </Section>
  );
};

export default About;
