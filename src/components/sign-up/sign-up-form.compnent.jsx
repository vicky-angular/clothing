import { useState } from "react";
import { createUserDocumentFromAuth , createAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const {displayName, email, password, confirmPassword } = formFields;

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value});
}
    
   const saveSignUpData = async (event) => {
     event.preventDefault();
     if(password !== confirmPassword){
        alert('password not match');
        return;
     }
     try{
        const { user } = await createAuthUserWithEmailAndPassword(email, password);
        const saveUser = await createUserDocumentFromAuth(user, {displayName})
        console.log('AFTER SINGUP ---->', saveUser);
     }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert('email already exits');
        }
;   console.log('USER CREATION HAVING ERROR', error);
     }
     
   }

    return (
<div>
    <h1>Sing Up with your email and password</h1>
    <form onSubmit={saveSignUpData}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" 
        value={displayName}
        />
        <label >Email</label>
        <input type="email" required onChange={handleChange} name="email"
        value={email}
         />
        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password"
        value={password}
         />
        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword"
        value={confirmPassword}
        />
        <button type="submit">Save</button>
    </form>
</div>
    );
}

export {SignUpForm}