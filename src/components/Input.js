import React from "react";
import { StyledInput, Label, TextArea } from "./styled-components";

const Input = (props) => {
  const { name, error, textArea } = props;
  return (
    <div>
      <Label htmlFor={name}>{name}</Label>
      {!textArea ? (
        <StyledInput type={name==='phone'? 'tel' : 'text'} {...props} />
      ) : (
        <TextArea type="text" {...props} />
      )}
      <div className='errors'>{error}</div>
    </div>
  );
};

export default Input;
