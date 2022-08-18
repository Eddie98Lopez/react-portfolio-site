import React from 'react'
import styled from 'styled-components'
const SVG = styled.svg`
transition: 1s ease-in-out;
fill: rgba(0,0,0,0);
box-shadow: 3px 3px 10px rgba(0,0,0,.8);
border-radius:100px;
height: 50%;
width: auto;
margin:.0625rem;
${(props) =>
    props.counter === props.index &&
    `
transition: 1s ease-in-out;
fill:white;`}

@media only screen and (max-width:600px){
  height: 60%;
  margin:.25rem;
}
`

const Circle = (props) => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" {...props}>
  <g id="Ellipse_2" data-name="Ellipse 2"  stroke="#fff" strokeWidth="3">
    <circle cx="12.5" cy="12.5" r="12.5" stroke="none"/>
    <circle cx="12.5" cy="12.5" r="11" fill="none"/>
  </g>
</SVG>

  )
}

export default Circle