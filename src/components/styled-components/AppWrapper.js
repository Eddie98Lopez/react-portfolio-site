import styled from "styled-components";

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 0.57fr 2fr;
  grid-template-rows: 100%;
  overflow: hidden;
  position:relative;

  & .left {
    box-sizing: border-box;
  }
  & .right {
    box-sizing: border-box;
    overflow-x: hidden;
    height:100%;
    overflow-y: scroll;
    background: ${props=>props.theme.colors.black};
    &::-webkit-scrollbar {
      width: 3px;
    }
  }

  @media only screen and (max-width:768px){
    display:flex;
    position:fixed;
    width:100%;
    flex-direction:column;
    height: 100vh;

    & .left {
      z-index:3;
      background: ${props=>props.theme.colors.black};
    }

    & .right {
      box-sizing: border-box;
      background: #2c2c2c;
      padding: 0;
      padding-bottom:5rem;
    }


  }
`;

export default AppWrapper;
