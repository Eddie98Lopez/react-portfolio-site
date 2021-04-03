import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Image from './Image'

const GalleryWrapper = styled.div`
width:90%;
margin: auto;
gap: 1rem;
display:grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: auto;
position:relative;




& .imgWrapper{
    width: 20rem;
    height: 20rem;
    background-color:${props=>props.color};



  
    
    
    & img{
        width:100%;
        height:100%;
        object-fit: cover;
        object-position: 0 -4rem;

        &:hover{
            opacity:.2;
            transition:ease .5s;
            cursor:pointer;
        }

    
        
    }
}`

const Gallery = (props) => {

    const {galArray} = props

    const [gallery] = useState(galArray)

    console.log(gallery)

    

    return (
        <GalleryWrapper color="purple">
            {gallery.map( item => <Link to={`illustration/${item.id}`}><Image image={item}/></Link>)}
        </GalleryWrapper>
    )
}

export default Gallery 