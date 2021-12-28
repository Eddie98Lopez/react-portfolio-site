import styled from 'styled-components'


export const Nav = styled.nav`
box-sizing:border-box;
width:100%;
height:100%;
padding:2rem 1rem;
position:relative;
display: flex;
flex-direction: column;
justify-content:space-between;
border-bottom: 2px solid ${props =>props.theme.colors.white};
background:  ${props =>props.theme.colors.white};

& div{
    width:100%;
    box-sizing:border-box;
}

& .mobile{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    

    & #hamburger{display:none;};
}
& .bottom{
    box-sizing:border-box;
    display:block;

}

@media only screen and (max-width:768px){
    height:auto;
    padding: .5rem 1rem;
    background:none;

    & .bottom{
        box-sizing:border-box;
        display:${props => props.mobile === true ? 'flex' : 'none'};
    
    }
    

    & .mobile{
        display:flex;
        justify-content:space-between;
        height: 50px;
        fill: ${props =>props.theme.colors.white};

        & #hamburger{display:block;};


    }

    & .social{
        display:none;
    }
}

`

export const NavLinks = styled.div`
box-sizing:border-box;
padding-bottom: 3rem;
font-family: ${props=> props.theme.displayFont};
color: ${props=> props.theme.colors.grey};

& a{
    margin:.075rem 0;
    font-size: .85rem;
}

& div{
    box-sizing:border-box;
    display:flex;
    flex-direction: column;
    margin:2rem auto;
    align-items: flex-end;

}

@media only screen and (max-width:768px){
padding:0;
& a{
    margin:0;
    padding: 1rem;
    font-size: 1rem;
}

}`