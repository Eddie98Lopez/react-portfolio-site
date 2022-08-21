import styled from 'styled-components'
const Slider = styled.div`
  transform-origin:center;
  @keyframes imageFullscreen {
    0%{
      height:0;
      opacity:0;
    }
    100%{
      opacity:1;
      height:${props=>props.height || '95vh'};
    }
  }

  animation: imageFullscreen .25s ease-in-out;
  position: relative;
  width: 100%;
  height:${props=>props.height || '95vh'};
  background: ${props=>props.theme.colors.dark_blue||props.background || 'lightgray'};


  @media only screen and (max-width:425px){

    height:${props=> props.mobileHeight ||  '55vh'};

  }
`;
export default Slider