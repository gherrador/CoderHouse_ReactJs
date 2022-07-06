import './EndShop.css'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function EndShop() {
  const navigate = useNavigate();
  return (
    <Container>
      <Container fluid >
        <div>
          <h1>¡Gracias elegirnos!</h1>
          <span>¡El pago fue realizado con éxito!</span>
          <div>
            <img src={require('../../assets/images/thanks.gif')} alt="thanks" />
          </div>
          <p>Se enviara a tu casilla de correo el remito de tu compra!</p>
          <h3>どうもありがとう!</h3>
        </div>
        <div>
          <Button onClick={(() => navigate("/"))} variant="success">Regresar a la pagina principal</Button>
        </div>
      </Container>
    </Container>
  )
}
export default EndShop