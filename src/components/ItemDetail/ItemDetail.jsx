import { Card, Row, Col, Container } from 'react-bootstrap';
import Magnifier from "react-magnifier";
import ItemCount from '../ItemCount/ItemCount'
import { AccionBoton } from '../Botones/AccionBtn/Botones';
import './ItemDetail.css'

const ItemDetail = function ({ cambiarFoto, foto, producto, onAdd, Add }) {
    return (
        <div className='productContent'>
            <Container className='contenedor'>
                <Container className='fotosAux'>                    
                        <Col><img src={producto.Foto} onClick={cambiarFoto} alt='foto1' /></Col>         
                        <Col>{producto.Foto2 ? <img src={producto.Foto2} onClick={cambiarFoto} alt='foto2' /> : <></>}</Col>
                        <Col>{producto.Foto3 ? <img src={producto.Foto3} onClick={cambiarFoto} alt='foto3' /> : <></>}</Col>
                        <Col>{producto.Foto4 ? <img src={producto.Foto4} onClick={cambiarFoto} alt='foto4' /> : <></>}</Col>
                        <Col>{producto.Foto5 ? <img src={producto.Foto5} onClick={cambiarFoto} alt='foto5' /> : <></>}</Col>
                </Container>
                <Container id='fotoContainer'>
                    <Magnifier id='foto' src={foto === undefined ? producto.Foto : foto} width={500} />
                </Container>
                <div className='card'>
                    <Row xs="auto" md="auto" className="g-3">
                        <Col>
                            <Card border='light'>
                                <Card.Body>
                                    <Card.Title>{producto.Nombre}</Card.Title>
                                    <Card.Text>
                                        {`Precio: $${producto.Precio}`}
                                    </Card.Text>
                                </Card.Body>
                                {Add ? <AccionBoton /> :
                                    <ItemCount onAdd={onAdd} initial={1} stock={producto.Stock} producto={producto} />}
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='itemDescription'>
                {producto.Descripcion.replaceAll("~", "\n")}
            </div>
        </div>
    )
}


export default ItemDetail