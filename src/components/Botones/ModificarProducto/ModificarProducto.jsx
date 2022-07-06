import { Button } from "react-bootstrap";


export function ModifyProduct({accion}) {     
    
    return (
      <div className='btnModify'>               
              <Button id='btnMod' variant="primary" onClick={accion}><p>Modificar</p></Button>
             
      </div>
    )
  }
  