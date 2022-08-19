import styled from 'styled-components'

const ProjectInfo = styled.div`
box-sizing:border-box;
position:relative;
padding-top:30%;

& >*{
    margin-bottom:2rem;
}

& h2{
    font-size:2rem;
    font-family: ${props=>props.theme.displayFont};
    font-style:normal;
    font-weight:700;
    color: ${props=>props.theme.colors.white};
}

& h3{
    
    font-style:normal;
    font-weight:600;
    text-transform: uppercase;
    color: ${props=> props.theme.colors.white};
};

& .tags{
    display:flex;
    flex-wrap:wrap;
    align-items:center;

}


& p{
    
    font-family: roboto, sans-serif;
    color: lightgrey;
    font-style:normal;
    font-size:.96rem;
    font-weight: 300;
    line-height: 1.5rem;

    @media only screen and (max-width:768px){
        max-height:auto;
        overflow-y:visible;
        font-size:1.15rem;
    }

}
@media only screen and (max-width:768px){
    padding-top:0;
}
`


export default ProjectInfo