import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ImageThumb from './ImageThumb'

const GalleryWrapper = styled.div`
width:90%;
margin: auto;

gap: 1.3rem;
display:grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: auto;
position:relative;

@media only screen and (max-width: 768px){
    grid-template-columns: repeat(3,1fr);
    gap: .75rem;
    width:95%;
    margin-top: .75rem;
};

@media only screen and (max-width: 425px){
    grid-template-columns: repeat(2,1fr);
    gap: .5rem;
    width:95%;
    margin-top: .5rem;
};





& .imgWrapper{
    
    
    background-color:${props=>props.color};
    height: 0;
    overflow: hidden;
    padding-top: 100%;
    box-sizing: border-box;
    position: relative;

    
    & img{
        width:100%;
        vertical-align: top;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit:cover;
        

        &:hover{
            opacity:.6;
            filter:grayscale(1);
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
            {gallery.map( item => <Link to={`illustration/${item.collection}/${item.id}`}><ImageThumb image={item}/></Link>)}
        </GalleryWrapper>
    )
}

export default Gallery 