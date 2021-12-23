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

& div{
    width:100%;
    box-sizing:border-box;
}

& .mobile{}
& .bottom{
    box-sizing:border-box;

}

`

export const NavLinks = styled.div`
box-sizing:border-box;
padding-bottom: 8rem;
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

}`