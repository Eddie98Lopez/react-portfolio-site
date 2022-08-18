import styled from 'styled-components'
const Slider = styled.div`
  position: relative;
  width: 100%;
  height:${props=>props.height || '75vh'};
  background: ${props=>props.theme.colors.dark_blue||props.background || 'lightgray'};


  @media only screen and (max-width:425px){

    height:${props=> props.mobileHeight ||  '55vh'};

  }
`;
export default Slider