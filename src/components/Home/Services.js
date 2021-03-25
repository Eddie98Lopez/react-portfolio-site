import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const TalentContainer = styled.div`

width:100%;
height:100%;
position:relative;
top:-6.25rem;

& a {

    position:relative;
    bottom:-55%;
    
    @media only screen and (max-width: 710px){
        top:77%;

    }
    

    &:hover~img{
        transition: .5s ease-in;
        opacity:.8;
        filter:none;
    }
}
`

const TalentImg= styled.img`

    height: inherit;
    width: inherit;
    object-fit: cover;
    opacity: .15;
    filter: grayscale(100%);
    transition: ease-in .5s;
    

    &:hover {
        transition: ease-in .5s;
        filter: grayscale(50%);
        opacity: .5;
    
        }
`

const TalentH2 = styled.h2`

text-align: center;
font-size: 2rem;
padding-top:2rem;
padding-bottom: 2rem;
text-transform: uppercase;
letter-spacing: 5px;
position:relative;
z-index:1;

border: solid rgba(0, 0, 0, 0) 2px;


transition: .3s ease-in;

&:hover {
    color:white;
}

&:hover~img{
    transition: .5 ease-in;
    opacity: 1;
    filter: none;
}

`



const Services = (props)=>{

    const {talent} = props

    const mouseOver = e => {
        //console.dir(e.target)
        e.target.style.backgroundColor = talent.backgroundColor
        //console.log(e.target.style.background)
    }
    const mouseLeave = e =>{
        e.target.style.backgroundColor= '';
    }
    




    

    return(
        
        <TalentContainer >
            
            <Link to={talent.link}><TalentH2 onMouseOver={mouseOver} onMouseLeave={mouseLeave}>{talent.h2}</TalentH2></Link>
            <TalentImg src={talent.image} id={talent.id}/>
            
        </TalentContainer>


        
    )

}

export default Services