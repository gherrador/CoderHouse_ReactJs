import SignIn from "../../../components/SignIn/SignIn"
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/UserContext'
import { useContext } from 'react'
import { registerErrorAlert, registerSuccessAlert } from "../../../components/Alerts/Alertas";

function RegisterContainer() {
    const { SignInUser } = useContext(UserContext)
    const navigate = useNavigate();

    const regresar = () => {
        navigate('/')
    }

    const RegisterUser = async (data) => {
        let response = await SignInUser(data)
        if (response === true) {
            navigate('/')
            registerSuccessAlert()
        } else {
            registerErrorAlert()
        }
    }

    return (
        <div>
            <SignIn back={regresar} Register={RegisterUser} />
        </div>
    )
}

export default RegisterContainer