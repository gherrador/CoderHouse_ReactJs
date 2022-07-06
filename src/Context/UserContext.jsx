import { createContext, useState } from "react";
import { alertLoginError, alertLoginSuccess } from '../components/Alerts/Alertas'
import FacebookLog from "../Dal/Dao/User/FacebookAuth/FacebookAuth";
import GoogleAuth from "../Dal/Dao/User/GoogleAuth/GoogleAuth";
import LogOut from "../Dal/Dao/User/LogOut/LogOut";
import { GetUserFirebase, SignInFirebase } from '../Dal/Dao/User/NativeAuth/GetUserFirebase'


export const UserContext = createContext([])

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([])


    async function GetUser(data) {
        const usuario = await GetUserFirebase(data)
        if (usuario.docs.length === 0) {
            alertLoginError()
        } else {
            setUser(usuario.docs.map(User => User.data()))
            alertLoginSuccess(data.User)
        }
    }

    async function LogWhitFacebook() {
        let facebookUser = await FacebookLog()
        if (facebookUser !== null) {
            let usuario = [{
                Usuario: facebookUser.displayName,
                Email: facebookUser.email,
                Foto: facebookUser.photoURL,
                Telefono: facebookUser.phoneNumber
            }]
            alertLoginSuccess(facebookUser.displayName)
            setUser(usuario)
        }
    }

    async function LogWhithGmail() {
        let gmailUser = await GoogleAuth()
        if (gmailUser !== null) {
            let usuario = [{
                Usuario: gmailUser.displayName,
                Email: gmailUser.email,
                Foto: gmailUser.photoURL,
                Telefono: gmailUser.phoneNumber
            }]
            alertLoginSuccess(gmailUser.displayName)
            setUser(usuario)
        }
    }

    async function SignInUser(data) {
        try {
            const nuevoUsuario = await GetUserFirebase(data)
            //Vamos a verificar si el usuario ya se encuentra registrado.
            //En caso de estar registrado previamente, aparecera una alerta diciendo que el usuario ya fue registrado
            if (nuevoUsuario.docs.length === 0) {
                SignInFirebase(data)
                return true
            }
            //En caso de no estar registrado, procedera a registrar al usuario nuevo
            else {
                return false
            }
        } catch (err) {
            console.error(err)
        }
    }
    //Funcion para deslogear usuario

    const logOut = () => {
        LogOut()
        setUser('')

    }

    return (
        <UserContext.Provider value={{
            GetUser,
            user,
            logOut,
            SignInUser,
            LogWhitFacebook,
            LogWhithGmail
        }}>
            {children}
        </UserContext.Provider>
    )
}