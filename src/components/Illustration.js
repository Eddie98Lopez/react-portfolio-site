import React from 'react'
import Gallery from './Gallery'
import {illustrationGallery} from '../assets/index'
//import styled from 'styled-components'

const Illustration = (props)=>{

    //console.log(illustrationGallery)

    return(
        <div>

            <Gallery galArray={illustrationGallery.narnia}/>

            
           
        </div>

        
    )

}

export default Illustration