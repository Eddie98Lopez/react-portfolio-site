import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  box-sizing: border-box;

  & .errors {
    color: crimson;
  }

  & .firstlast {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
  & .leftForm {
  }
  & .rightForm {
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 2px;
  border-bottom: solid 2px ${(props) => props.theme.colors.grey};
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  padding: 0.5rem;
  outline: none;
  box-sizing: border-box;
  color:${(props) => props.theme.colors.white};

  &:focus {
    border: none;
    border-bottom: solid 2px white;
    transition: 0.3s ease;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 0.5rem;
  width: 50%;
  text-transform: capitalize;
  font-family: ${(props) => props.theme.displayFont};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: 2px;
  border-bottom: solid 2px ${(props) => props.theme.colors.grey};
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  min-height: 10.3rem;
  padding: 0.5rem;
  outline: none;
  box-sizing: border-box;
  resize: none;
  color:${(props) => props.theme.colors.white};

  &:focus {
    border: none;
    border-bottom: solid 2px white;
    transition: 0.3s ease;
  }
`;
