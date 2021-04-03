import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const NavLink = styled(Link)`
padding: 2rem;
text-decoration: none;
font-family:'Lato', sans-serif;
font-weight: 900;
color: rgb(175,175,175);
cursor: pointer;


&:hover{
    color: white;
    background-color: ${props=> props.color ? props.color : 'grey'};
    transition: .3s ease-in;
};


&.active{
    color: ${props=> props.color ? props.color : 'gray'};
    
    &:hover{
        color: white;
        background-color: ${props=>props.color ? props.color : 'grey'};
        transition: .3s ease-in;
    };
};



`

