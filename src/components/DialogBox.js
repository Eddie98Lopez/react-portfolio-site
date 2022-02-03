import React from "react";
import styled from "styled-components";
import { useStore } from "../utils/store/StoreProvider";

const DialogContainer = styled.div`
  width: 100%;
  height: 100vh;
  position:absolute;
  z-index: 500;
  display: ${(props) => (props.display === true ? "flex" : "none")};
  background: rgba(0,0,0,.5);
  backdrop-filter: blur(5px);
  align-items: center;
  box-sizing:border-box;
  justify-content: center;

  & div{
    display:flex;
    background: grey;
    height: 15rem;
    box-sizing:border-box;
    width: 50%;
    padding: 2rem;
    font-weight:bold;
    font-size: 1.15rem;
    color: white;
    margin:auto;
    text-align:center;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
  }
`;

const DialogBox = () => {
  const {dialog} = useStore().store
  const {dispatch} = useStore()
  

  const close = () => {
    dispatch({type:'CLOSE_DIALOG'})
  };
  return (
    <DialogContainer display={dialog.display}>
      <div>
        <p>{dialog.message}</p>
        <br/>
        <button onClick={close}>close</button>
      </div>
    </DialogContainer>
  );
};

export default DialogBox;
