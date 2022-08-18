import React from 'react'
import { ImageContainer } from '../styled-components'
import { useNavigate } from 'react-router-dom'


const GalleryThumb = (props) => {
const { cover_image,title, id, library} = props.project
const navigate = useNavigate()

    
return (
    <ImageContainer height='100%' width='100%' className='imageContainer' narnia onClick={()=>navigate(`/portfolio/${id}`)}>
        <img src={cover_image} alt={title}/>
        <div className='info'>
        <div>
        <h2>{title}</h2>
        <h3>{library}</h3>
        </div>
        </div>
    </ImageContainer>)
}

export default GalleryThumb
