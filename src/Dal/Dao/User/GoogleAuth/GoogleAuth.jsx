import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { alertLoginError } from "../../../../components/Alerts/Alertas";
import { authentication } from '../../../../Firebase/config'


async function GoogleAuth() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(authentication, provider)
    .then((result) => {
      console.log(result.user)
    })
    .catch(() => alertLoginError())
  const user = authentication.currentUser;
  return user
}

export default GoogleAuth