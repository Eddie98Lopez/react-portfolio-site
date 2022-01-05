import React from 'react'
import { illustrationGallery } from '../../assets/Illustration/illustrationGallery'
import { ImageContainer } from '../styled-components'
import GalleryThumb from './GalleryThumb'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const GalleryContainer = styled.div`
padding: 5%;
display:grid;
gap:1rem;
grid-template-columns: repeat(3,1fr);

@media only screen and (max-width:435px){
    grid-template-columns: repeat(2,1fr);
    gap:.75rem;
}
`

const Gallery = () => {
    const {category} = useParams()

    /*
    const {category} = useParams()
    const gallery = useStore().projects.filter(item => item.category == category)

    */


    return (
        <GalleryContainer>
            {category === 'illustration' && illustrationGallery.map(item=> <GalleryThumb item={item} key={item.id}/>)}
            {category === 'web-dev' && "This page is under construction"}
        </GalleryContainer>
    )
}

export default Gallery
