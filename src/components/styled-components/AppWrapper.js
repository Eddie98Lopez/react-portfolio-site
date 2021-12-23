import styled from "styled-components";

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 0.75fr 2fr;
  grid-template-rows: 100%;
  overflow: hidden;

  & .left {
    box-sizing: border-box;
  }
  & .right {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    background: #2c2c2c;
    &::-webkit-scrollbar {
      width: 3px;
    }
  }
`;

export default AppWrapper;
