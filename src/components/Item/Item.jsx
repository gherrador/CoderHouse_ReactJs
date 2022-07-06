import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = function ({ producto }) {
    return (
        <div className='card'>
            <Row xs={1} md={3} className="g-3">
                <Col>
                    <Card border='light' style={{ width: '20rem' }}>
                        <Card.Img className='foto' variant="top" src={producto.Foto} />
                        <Card.Body>
                            <Card.Title>{producto.Nombre}</Card.Title>                            
                            <Card.Text>
                                {`Precio: $${producto.Precio}`}
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/detalle/${producto.Id}`}>
                        <Button variant='primary'>
                            Ver detalle
                        </Button>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default Item