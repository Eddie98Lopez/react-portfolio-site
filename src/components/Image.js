import React from 'react'

const Image = (props) => {

    const {image} = props

    return(
        <div key={image.id} className='imgWrapper'>

            <div className='overlay'></div>

            <img src={image.src} alt={image.alt}/>

            

        </div>
    )
}

export default Image