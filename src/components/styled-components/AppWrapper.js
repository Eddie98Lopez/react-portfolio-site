import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: .75fr 2fr;
  grid-template-rows: 100%;
  overflow:hidden;

  & .left {
  }
  & .right {
    overflow-x: hidden;
    overflow-y: scroll;
    background: #2c2c2c;
    &::-webkit-scrollbar {
      width: 3px;
    }
  }
`;

export default AppWrapper;
