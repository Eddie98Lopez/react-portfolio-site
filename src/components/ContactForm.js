import React, {useState,useEffect} from 'react'
import * as Yup from 'yup'
import schema from '../utils/schema'
import Input from './Input'


const Contact = (props)=>{

    const fields = ['first','last','phone','email']

    const initialCreds={
        first:'',
        last:'',
        phone:'',
        email:'',
        text:'',
      }
      const initialErrs={
        first:'',
        last:'',
        phone:'',
        email:'',
        text:'',
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
        <div>
            <form onSubmit={onSubmit}>


            {fields.map(item =>{
                return(
                <Input name={item}
                onChange={onChange}
                value={values[item]}
                error={errs[item]}/>)
            })}
                

                <button disabled={disabled}>Send</button>


                

            </form>
        </div>
    )

}

export default Contact