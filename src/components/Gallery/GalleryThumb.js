import React from 'react'
import { ImageContainer } from '../styled-components'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../utils/store/StoreProvider'


const GalleryThumb = (props) => {
const { cover_image,title, id, library} = props.project
const navigate = useNavigate()
const {dispatch} = useStore()

const handleClick = ()=>{
    dispatch({type:'LOAD'})
    navigate(`/portfolio/${id}`)

}

    
return (
    <ImageContainer height='100%' width='100%' className='imageContainer' narnia onClick={handleClick}>
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
