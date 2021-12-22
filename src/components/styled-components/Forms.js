import styled from 'styled-components'


export const Input = styled.input`
border-radius: 10px;
border: solid 2px rgb(54, 54, 54);
width: 50%;
padding:.5rem;
height: 1.5rem;
outline:none;

&:focus{
    border: solid 2px lightslategray;
    transition: .3s ease;
}`

export const Label = styled.label`
display:block;
margin:.5rem;
width:50%;
text-transform:capitalize`

export const TextArea = styled.textarea`
border-radius: 10px;
border: solid 2px rgb(54, 54, 54);
font-family:sans-serif;
width: 50%;
height: 5rem;
outline:none;
padding:.5rem;

&:focus{
    border: solid 2px lightslategray;
    transition: .3s ease;
};`