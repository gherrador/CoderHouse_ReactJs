import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddProductPanel from '../../../../components/AddProduct/AddProduct';

function AddProductContainer() {
    const navigate = useNavigate();

    const regresar = () => {
        navigate('/admin')
    }

  return (
    <div><AddProductPanel back={regresar}/></div>
  )
}

export default AddProductContainer