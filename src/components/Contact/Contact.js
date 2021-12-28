import React from "react";
import { Section } from "../styled-components";
import ContactForm from "./ContactForm";

const styles = `
margin-top:40vh;
padding-bottom:6rem;`


const Contact = (props) => {
  return (
    <Section styles={styles} height='auto' id='contact'>

      <h2>Contact</h2>
      <ContactForm />
    </Section>
  );
};

export default Contact;
