import {signOut } from "firebase/auth";
import { authentication } from '../../../../Firebase/config'



function LogOut() {
    signOut(authentication).then(() => {
      // Sign-out successful.
    }).catch((error) => {
        console.log(error)
      // An error happened.
    });  
}

export default LogOut

