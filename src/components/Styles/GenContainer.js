import styled from 'styled-components'

export const GenContainer= styled.div`
width:100%;
height:${props=>props.height};
background:${props=>props.background ? props.background : 'white'};

${props=>props.flex};
`