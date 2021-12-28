import styled from 'styled-components'
const Button = styled.button`
line-height:1rem;
padding: .5rem 1.5rem;
background: ${props=>props.theme.colors.white};
font-family: ${props=>props.theme.displayFont};
font-size:.95rem;
letter-spacing: 2px;
outline:none;
border:none;
color: ${props=>props.theme.colors.grey};
border-radius:50px;
cursor:pointer;
margin-top:1rem;


@media only screen and (max-width:768px){
    font-size:1.35rem;
    padding: 1.5rem 4rem;
}
`

export default Button
