import { useState, useEffect, useContext } from "react"

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import { getRedirectResult } from "firebase/auth"
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";



import "./sign-in-form.styles.scss"
//redirect ile bağlantı yaptığımızda konsolda göremeyiz bununda sebebi tamamen yeni bir sayfada açılması ve uygulamamızın bunu takip etmemesidir. Konsolda görebilmek için useEffect , getRedirectResult kullanmamız ve sonucu almak için auth , eklememiz gerekiyor.auth uygulamada gerçekleşen tüm kimlik doğrulamalarını takip etmemize yardımcı olur.

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext)

    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    useEffect(() => async () => {
        const signInWithGoogleRed = await getRedirectResult(auth);
        if (signInWithGoogleRed) {
            await createUserDocumentFromAuth(signInWithGoogleRed.user);
        }
    }, []);

    const signInWıthGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(response);
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email")
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email")
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChance = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your e-mail and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChance} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChance} name="password" value={password} />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWıthGoogle}>Google Sign</Button>
                    <Button type="button" buttonType="googleRed" onClick={signInWithGoogleRedirect}>Google Redirect</Button>

                </div>
            </form>
        </div>
    )
}
// <Button /> buttonların içine type="button" yazmamızın sebebi formun butonları otomatik olarak type="submit" atamasıdır bunu önlemek için type="button" ekliyoruz.Bu sayede google sign in ile giriş yapınca  tanımladığımız "no user associated with this email" uyarısını almayız.

export default SignInForm;