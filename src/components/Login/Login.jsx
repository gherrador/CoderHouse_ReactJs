import './LogIn.css'
import { useForm } from 'react-hook-form'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FacebookBtn from '../Botones/FacebookLogin/FacebookLogin';
import GoogleLogin from '../Botones/GoogleLogin/GoogleLogin';

const LogIn = ({ onSubmit, User, closeSession, Register, facebookLog, GmailLog }) => {
  const { register, handleSubmit } = useForm();
  return (

    <div>
      {User.length > 0 ?
        <div className="Loged">
          <Card style={{ width: '18rem' }}>
            <Card.Img id='fotoLog' variant="top" src={User[0].Foto} />
            <ListGroup className="list-group-flush">
              <ListGroupItem>Usuario: {User[0].Usuario}</ListGroupItem>
              <ListGroupItem>Email: {User[0].Email}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button onClick={closeSession}>Cerrar Sesion</Button>
            </Card.Body>
          </Card>
        </div>
        :
        <div className="LogIn">
          <form id='formLog' onSubmit={handleSubmit(onSubmit)}>
            <span>Usuario</span>
            <div>
              <input {...register("User", { required: true })}
                onInvalid={e => e.target.setCustomValidity("El campo usuario no puede estar vacio")}
                onInput={e => e.target.setCustomValidity('')}
                required
                placeholder='Ingrese su usuario'
              />
            </div>
            <span>Contraseña</span>
            <div>
              <input  type="password" {...register("Password", { required: true })}
                onInvalid={e => e.target.setCustomValidity("El campo Contraseña no puede estar vacio")}
                onInput={e => e.target.setCustomValidity('')}
               
                required
                placeholder='Ingrese su contraseña'

              />
            </div>
            <button id='btnLog' className='btn btn-success'>Enviar</button>
            <div>
              <span>Tambien podes logearte desde:</span>
            </div>
            <div className='btnLoggersProvier'>
              <div>
                <FacebookBtn facebookLog={facebookLog} />
                &nbsp;
                o
                &nbsp;
                <GoogleLogin GoogleLog={GmailLog} />
              </div>
            </div>
            <div>
              <span className='text-center'>Aún no tenes tu cuenta? Resgistrate Gratis</span>
            </div>
            <div>
              <Button id='Reg' variant='primary' onClick={Register}>Registrarse</Button>
            </div>
          </form>
        </div>
      }
    </div>
  );

};

export default LogIn;