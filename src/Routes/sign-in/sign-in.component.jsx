import { 
    signInWithGooglePopUp,
    createUserDocumentFromAuth

} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    console.log('the resopnse google', user)
    createUserDocumentFromAuth(user)
}
    return (
        <>
        Sing In Page
        <button onClick={logGoogleUser}>SingInWithGoogle popup</button>
        </>
    );
}
export {SignIn}