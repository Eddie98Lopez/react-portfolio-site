import styled from 'styled-components'
const Button = styled.button`
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
`

export default Button
