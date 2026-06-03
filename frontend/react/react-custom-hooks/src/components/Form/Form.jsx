import { useFormInput } from "../../hooks/useFormInput.jsx"
export default function Form(){
    
    const firstNameProps = useFormInput('Nicolas')
    const lastNameProps = useFormInput('Silva')
     
    return (
        <>
            <label>
                First Name:
                <input {...firstNameProps}/> 
            </label>
            <label>
                Last Name:
                <input {...lastNameProps}/>
            </label>  
            <p> 
                <b>
                    Bom dia, {firstNameProps.value} {lastNameProps.value}!
                </b>
            </p>
        </>
    )
}