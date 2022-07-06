import './GoogleLogin.css'

function GoogleLogin({ GoogleLog }) {
    return (
        <div>
            <button onClick={GoogleLog} className="buttonGoogle">
                <div className='GoogleIcon'>
                    <img src={require('../../../assets/images/google.png')} alt='google' />
                </div>
                <span className="googleText">Google</span>
            </button>
        </div>
    )
}
export default GoogleLogin