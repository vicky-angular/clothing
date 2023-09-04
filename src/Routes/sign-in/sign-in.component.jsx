import { 
    signInWithGooglePopUp,
    createUserDocumentFromAuth

} from "../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../components/sign-up/sign-up-form.compnent";
const SignIn = () => {
const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    console.log('the resopnse google', user);
    const userDocRef = await createUserDocumentFromAuth(user);
}
    return (
        <>
        Sing In Page
        <button onClick={logGoogleUser}>SingInWithGoogle popup</button>
        <SignUpForm></SignUpForm>
        </>
    );
}
export {SignIn}