import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { authentication } from '../../../../Firebase/config'
import { alertLoginError } from "../../../../components/Alerts/Alertas";

async function FacebookLog() {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(authentication, provider)
        .then((result) => {
            console.log(result.user)
        })
        .catch(() => alertLoginError())
    const user = authentication.currentUser;
    return user
}

export default FacebookLog