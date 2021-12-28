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
  
}

& .img{
  margin:auto;
  background:white;
  width:20rem;
  height: 80%;
  grid-area: i;
}

@media only screen and (max-width:768px){
  gap: 2rem;

  grid-template-areas: 
'i a'

;
& .img{
  background:white;
  width:10rem;
  height: 10rem;
  grid-area: i;
  
}


}
`

export default styles