import { LogUser } from "../../../components/Botones/Login/LogUser"
import LogIn from "../../../components/Login/Login"
import { useState, useContext } from 'react'
import './LoginContainer.css'
import { UserContext } from '../../../Context/UserContext'
import { useNavigate } from 'react-router-dom';
import { alertLoginError } from "../../../components/Alerts/Alertas"


function LoginContainer() {
  const { GetUser, user, logOut, LogWhitFacebook, LogWhithGmail } = useContext(UserContext)
  const [display, setDisplay] = useState('none')

  const navigate = useNavigate();
  const PopUp = (e) => {
    user.length === 0 && document.getElementById('formLog').reset() 
    e.preventDefault()
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  const close = () => {  
    logOut()
    setDisplay('none')
  }

  const registerUser = () => {
    navigate("/signin")
    setDisplay('none')
  }

  const Login = (data) => {    
    GetUser(data)
    setDisplay('none')
  }

  const logWithFacebook = async () => {
    await LogWhitFacebook()
    .then(setDisplay('none'))
  }   

  const logWithGmail = async() => {
   await LogWhithGmail()  
   .then(setDisplay('none'))
   .catch(resp => resp === false && alertLoginError())
  } 


  return (
    <div>
      <LogUser PopUp={PopUp} User={user} />
      <div className="PopUp" style={{ display: display === 'none' ? 'none' : 'flex' }}>
        <LogIn facebookLog={logWithFacebook} GmailLog={logWithGmail} onSubmit={Login} User={user} closeSession={close} Register={registerUser} />
      </div>
    </div>
  )
}

export default LoginContainer