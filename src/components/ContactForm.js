import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import schema from '../schema'

const ContainerDiv=styled.div`

width:100%;

`

const StyledErrors= styled.div`
margin-top:1rem;
margin-bottom:.5rem;
font-size:1.3rem;
color:crimson;

`

const ContactForm= styled.form`

padding:2rem;
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
 



& h2{
    font-size:2rem;
    letter-spacing:5px;
    margin-bottom:.5rem;
    

}

& label{
    display:block;
    margin:.5rem;
    width:50%
}

& input {
    border-radius: 10px;
    border: solid 2px rgb(54, 54, 54);
    width: 50%;
    padding:.5rem;
    height: 1.5rem;
    outline:none;

    &:focus{
        border: solid 2px lightslategray;
        transition: .3s ease;
    }

};

& textarea{
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
    };


};

& button {

    width: 50%;
    margin-top:.5rem;
    outline:none;
    padding:1rem;
    background:black;
    color:white;
    border-radius: 30px;
    border: none;
    font-family:'Lato', sans-serif;
    font-weight: 900;
    letter-spacing: 5px;
    font-size:1rem;
    text-transform:uppercase;
    cursor:pointer;
    
    border: solid 3px rgb(186, 186, 186);

    &:focus{
        outline:none;
    }

    &:disabled{
        opacity:.1;
        border:solid 3px rgb(186, 186, 186);
        cursor:default;
        &:hover{
            background:black;
            border:none;
            color:white;
        border: solid 3px rgb(186, 186, 186);
        transition: .2s ease-in-out;
        }
    }

    &:hover{
        background:none;
        color: black;
        border: solid 3px black;
        transition: .2s ease-in-out;
    }

   

}
@media only screen and (max-width: 768px){
    
    

    & label,input,textarea,button{
        width:70%;
    }

}

@media only screen and (max-width: 500px){
    
    

    & label,input,textarea,button{
        width:95%;

    }

    & input,textarea{
        padding: .7rem;
        font-size: 1.05rem;
    }

}`

const Contact = (props)=>{

    const newDate= new Date();



    const initialCreds={
        firstName:'',
        lastName:'',
        email:'',
        text:'',
        date: newDate.toString(),
      }
      const initialErrs={
        firstName:'',
        lastName:'',
        email:'',
        text:''
      }
    
      const [values,setValues]=useState(initialCreds)
      const [errs,setErrs]=useState(initialErrs)
      const [disabled,setDisabled]=useState(true)
      const [sentForms,setSentForms]=useState([])
    
      ///-------helpers
    

    const onChange=(e)=>{

        const{name,value}=e.target
        setValues({...values, [name]:value})

        Yup.reach(schema, name)
            .validate(value)
            .then(res=>setErrs({...errs, [name]:''}))
            .catch(err=>setErrs({...errs,[name]:err.errors[0]}))}

    const onSubmit=(e)=>{

        e.preventDefault()
        console.log(values)
        setSentForms([...sentForms,values])
        /* axios.post(`endpoint`,values)
            .then(res=>(setSentForms([...sentForms,res.data])))
            .catch(err=>console.log(err))*/
        setValues(initialCreds)
    }

    useEffect(()=>{
        schema.isValid(values).then(valid=>setDisabled(!valid))
    },[values])

    return(
        <ContainerDiv>
            <ContactForm onSubmit={onSubmit}>

                <h2>CONTACT ME</h2>

                <label htmlFor='firstName'></label>
                    <input
                    type='text'
                    name='firstName'
                    value={values.firstName}
                    onChange={onChange}
                    placeholder='First Name'/>
                

                <label htmlFor='LastName'></label>
                    <input
                    type='text'
                    name='lastName'
                    value={values.lastName}
                    onChange={onChange}
                    placeholder='Last Name'/>
                

                <label htmlFor='email'></label>
                    <input
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    placeholder='E-mail'/>
                

                <label htmlFor='text'></label>
                    <textarea
                    type='text'
                    name='text'
                    value={values.text}
                    onChange={onChange}
                    placeholder='Tell me more'/>
                

                <button disabled={disabled}>Send</button>


                <StyledErrors>
                <div>{errs.firstName}</div>
                <div>{errs.lastName}</div>
                <div>{errs.email}</div>
                <div>{errs.text}</div>
                </StyledErrors>

                

            </ContactForm>
        </ContainerDiv>
    )

}

export default Contact