import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const TalentContainer = styled.div`

width:100%;
height:100%;
position:relative;
top:-6.25rem;

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
top:55%;
cursor:pointer;

border: solid rgba(0, 0, 0, 0) 2px;


transition: .3s ease-in;

&:hover {
    color:white;
    background: ${props=>props.color};
};

&:hover~img{
    transition: .5 ease-in;
    opacity: 1;
    filter: none;
};


@media only screen and (max-width:710px){
top:95%;
}




`



const Services = (props)=>{

    const {talent,color} = props
    const {push} = useHistory()


    return(
        
        <TalentContainer >
            
            <TalentH2  onClick={()=>push(`/${talent.id}`)} color={color}>{talent.h2}</TalentH2>
            <TalentImg src={talent.image} id={talent.id}/>
            
        </TalentContainer>


        
    )

}

export default Services