import React from 'react'
import { illustrationGallery } from '../../assets/Illustration/illustrationGallery'
import GalleryThumb from './GalleryThumb'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
import UnderConstruction from '../UnderConstruction'

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
            <Helmet>
                <title>{category} | Eddie Lopez </title>
            </Helmet>
            {category === 'illustration' && illustrationGallery.map(item=> <GalleryThumb project={item} key={item.id}/>)}
            {category === 'web-dev' && <UnderConstruction/>}
        </GalleryContainer>
    )
}

export default Gallery
