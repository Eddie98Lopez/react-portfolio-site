import React, { useState } from "react";
import styled from "styled-components";

const DialogContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 500;
  display: ${(props) => (props.display === true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const DialogBox = () => {
  const [display, setDisplay] = useState(true);

  const close = () => {
    setDisplay(false);
  };
  return (
    <DialogContainer display={display}>
      <div>
        Your message has been sent. Thanks.
        <button onClick={close}>close</button>
      </div>
    </DialogContainer>
  );
};

export default DialogBox;
