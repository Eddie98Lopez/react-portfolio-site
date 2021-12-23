import styled from 'styled-components'

const Section = styled.section`
box-sizing:border-box;
width:90%;
margin:auto;
height: ${props => props.height ? props.height : '80vh'};

& h1,h2,h3,h4,h5,h6{
    font-family: ${props=>props.theme.displayFont}

};

& h2{
    color:${props=>props.theme.colors.grey};
    font-size: 1.5rem;
}

`

export default Section