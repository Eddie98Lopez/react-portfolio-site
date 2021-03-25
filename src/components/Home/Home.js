import React,{useState} from 'react'
import styled from 'styled-components'
import Services from './Services'
import Contact from '../Contact'
import About from '../About'
import photography from '../../assets/Services/photography.jpg'
import illustration from '../../assets/Services/illustration.jpg'
import design from '../../assets/Services/design.png'

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 90vh;
    margin: 0px;


    @media only screen and (max-width: 768px){
        grid-template-rows: 60vh

    }


    @media only screen and (max-width: 710px){
        grid-template-columns: auto;
        grid-template-rows: 200px 200px 200px;

    }
   `
const GridWrapper2 = styled.section`
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows: auto;

@media only screen and (max-width: 768px){
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;

}`

const HomeWrapper=styled.div`
animation: fade-in 1s ease-in;`

const Home = (props)=>{
    
    

    const talentsArray = [
        {
            h2: 'Illustration',
            image: illustration,
            style: '',
            id: 'illustration',
            backgroundColor: 'purple',
            link:'/illustration'
        },
        {
            h2: 'Design',
            image: design,
            style: '',
            id: 'design',
            backgroundColor: 'orange',
            link:'/design'
        },
        {
            h2: 'Photography',
            image: photography,
            style: '',
            id: 'photography',
            backgroundColor: 'teal',
            link:'/photography'
        },
        
    ]

    const [talents,setTalents] = useState(talentsArray)

    return(

        <HomeWrapper>
        <GridWrapper>
            {talents.map(item=> <Services talent={item} key={item.id}/>)}
        </GridWrapper>
        <GridWrapper2>
            <About/>
            <Contact/>
        </GridWrapper2>
        
        </HomeWrapper>
    )

}

export default Home