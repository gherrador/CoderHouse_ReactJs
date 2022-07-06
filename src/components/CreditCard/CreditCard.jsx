import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import Checkout from '../Checkout/Checkout'
import './CreditCard.css'

const CreditCard = ({ state, handleInputChange, handleFocusChange, processPayment, precioTotal }) => {
    return (
        <div className="cardCredit">
            <div className="card-body">
                <Cards
                    number={state.number}
                    name={state.name}
                    email={state.email}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form>
                    <div className="form-group">
                        <label htmlFor="number">Número de la tarjeta</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            maxLength={16}
                            placeholder="Numero de tarjeta"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}                            
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="30"
                            className="form-control"                           
                            placeholder="Nombre"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-row">
                        <div style={{marginRight: "5px"}} className="form-group col-md-6">
                            <label htmlFor="expiry">Vencimiento</label>
                            <input
                                type="text"
                                className="form-control"
                                name="expiry"
                                maxLength="4"
                                placeholder="Expiración"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVC</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cvc"
                                maxLength="4"
                                placeholder="CVC"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>
                    
                        <Checkout totalPrice={precioTotal} pago={processPayment} />
                </form>
            </div>
        </div>
    )
}

export default CreditCard