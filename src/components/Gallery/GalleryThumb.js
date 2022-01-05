import React,{useEffect} from 'react'
import { ImageContainer } from '../styled-components'
import { useParams, useNavigate } from 'react-router-dom'

const drive = 'https://drive.google.com/uc?id='

const GalleryThumb = (props) => {
const {cover_photo, title, id} = props.item
const navigate = useNavigate()
const {category} = useParams()


    
 
    
    return (
        <ImageContainer height='100%' width='100%' className='imageContainer' narnia onClick={()=>navigate(`/${category}/${id}`)}>
            <img src={`${drive}${cover_photo}`}alt={title}/>
            <div className='info'>
            <h2>{title}</h2>
            </div>
        </ImageContainer>
    )
}

export default GalleryThumb
