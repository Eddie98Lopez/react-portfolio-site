import React from 'react'
import { ImageContainer } from '../styled-components'
import { useParams, useNavigate } from 'react-router-dom'

const drive = 'https://drive.google.com/thumbnail?id='

const GalleryThumb = (props) => {
const {cover_photo, title, id} = props.project
const navigate = useNavigate()
const {category} = useParams()
    
return (
    <ImageContainer height='100%' width='100%' className='imageContainer' narnia onClick={()=>navigate(`/${category}/${id}`)}>
        <img src={`${drive}${cover_photo}&sz=w1100-h1100`}alt={title}/>
        <div className='info'>
        <h3>{title}</h3>
        </div>
    </ImageContainer>)
}

export default GalleryThumb
