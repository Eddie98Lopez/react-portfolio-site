const styles = `
display:grid;
gap:3rem;
width:100%;
padding-left:5%;
grid-template-areas: 
' . . i'
' . . i'
' . . i'
' a a i';

& .about{
  grid-area:a;
  position:relative;
}

& .img{
  margin:auto;
  background:white;
  width:20rem;
  height: 80%;
  grid-area: i;
}
`

export default styles