import React, { useState, useEffect } from "react";
import { Form, Section } from "./styled-components";
import axios from 'axios'
import * as Yup from "yup";
import {schema, baseURL} from "../utils";
import Input from "./Input";



const Contact = (props) => {
  const initialCreds = {
    first: "",
    last: "",
    phone: "",
    email: "",
    message: "",
  };
  const initialErrs = {
    first: "",
    last: "",
    phone: "",
    email: "",
    message: "",
  };

  const [values, setValues] = useState(initialCreds);
  const [errs, setErrs] = useState(initialErrs);
  const [disabled, setDisabled] = useState(true);

  ///-------helpers

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    Yup.reach(schema, name)
      .validate(value)
      .then((res) => setErrs({ ...errs, [name]: "" }))
      .catch((err) => setErrs({ ...errs, [name]: err.errors[0] }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    
     axios.post(`${baseURL}/messages`,values)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    setValues(initialCreds);
  };

  useEffect(() => {
    schema.isValid(values).then((valid) => setDisabled(!valid));
  }, [values]);

  return (
    <Section id="contact">
      <h2>Contact</h2>
      <Form onSubmit={onSubmit}>
        <div className="formContainer">
          {" "}
          <div className="leftForm">
            <div className="firstlast">
              <Input
                name={"first"}
                onChange={onChange}
                value={values["first"]}
                error={errs["first"]}
                placeholder="John"
              />
              <Input
                name={"last"}
                onChange={onChange}
                value={values["last"]}
                error={errs["last"]}
                placeholder="Doe"
              />
            </div>

            <Input
              name={"phone"}
              onChange={onChange}
              value={values["phone"]}
              error={errs["phone"]}
              placeholder="xxx-xxx-xxxx"
            />
            <Input
              name={"email"}
              onChange={onChange}
              value={values["email"]}
              error={errs["email"]}
              placeholder="john@johndoe.com"
            />
          </div>
          <div className="rightForm">
            <Input
              textArea
              name={"message"}
              onChange={onChange}
              value={values["message"]}
              error={errs["message"]}
              placeholder="Your message here ..."
            />
          </div>
        </div>

        <button disabled={disabled}>Send</button>
      </Form>
    </Section>
  );
};

export default Contact;
