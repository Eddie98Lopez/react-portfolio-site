import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo'
import { useStore } from '../utils/store/StoreProvider'

const LoadWrapper = styled.div`
width: 100%;
height:100vh;
background: white;
display: ${props => props.display === 'false' ? 'none' : 'grid'};
justify-content:center;
align-items:center;
position:fixed;
z-index:5000000;

@keyframes load {
    0%{ opacity: 1}
    50%{ opacity: .05}
    100%{ opacity: 1}
}

& div{
    width:7rem;

    & p{

        text-align:center;
    }


    & svg{
        width:inherit;
        height:auto;
        animation-name:load;
        animation-delay: .2s;
        animation-duration: 2s;
        animation-iteration-count: 500;
    }

}`

const Loading = () => {
    const {loading} = useStore().store
  return (
    <LoadWrapper display={loading.toString()}>
        <div>
            <Logo/>
        </div>
        
    </LoadWrapper>
  )
}

export default Loading