import React,{useState} from 'react'
import styled from 'styled-components'
import Services from './Services'
import Contact from '../ContactForm'
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
        grid-template-rows: 60vh;

    };


    @media only screen and (max-width: 710px){
        grid-template-columns: auto;
        grid-template-rows: repeat(3,7rem);

    }
   `
const GridWrapper2 = styled.section`
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows: auto;

& .contact{
    background:rgb(186, 186, 186);
};

@media only screen and (max-width: 768px){
    grid-template-columns: auto;
    grid-template-rows: 20rem auto;

}`

const HomeWrapper=styled.div`
animation: fade-in 1s ease-in;`

const Home = (props)=>{

    const talentsArray = [
        {
            h2: 'Illustration',
            image: 'https://drive.google.com/uc?id=1u4XYz7DayLL9NBQzV6HJ8aRvSM4RsDbt',
            id: 'illustration',
            backgroundColor: '128,0,128',
            
        },
        {
            h2: 'Design',
            image: design,
            id: 'design',
            backgroundColor: '255,165,0'
        },
        {
            h2: 'Photography',
            image: photography,
            id: 'photography',
            backgroundColor: '0,128,128',
            
        },
        
    ]

    const [talents] = useState(talentsArray)

    return(

        <HomeWrapper>
        <GridWrapper>
            {talents.map(item=> <Services color={item.backgroundColor} talent={item} key={item.id}/>)}
        </GridWrapper>
        <GridWrapper2>
            <About/>
            <div className='contact' id='contact'><Contact/></div>
        </GridWrapper2>
        
        </HomeWrapper>
    )

}

export default Home