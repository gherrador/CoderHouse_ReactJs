import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { UserContext } from '../Context/UserContext';
import AddProductContainer from '../pages/Containers/AdminContainer/AddProductContainer/AddProductContainer';
import AdminContainer from '../pages/Containers/AdminContainer/AdminPanel/AdminContainer';
import ModifyProduct from '../pages/Containers/AdminContainer/ModifyProductContainer/ModifyProductContainer';

const PrivateRoute = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <Routes>
               {/*  Se realiza un condicional, para saber si, en primer instancia existe user
                 Luego es necesario saber si ese User tiene propiedad de Admin.
                 Para caso que posea propiedad de Admin, se podra dirigir al panel de Admin, 
                 caso contrario sera redirigido a la pagina principal
                 De esta manera queda protegida la ruta */}
                <Route path='/admin' element={user.length > 0 ? (user[0].admin !== true ? <Navigate to='/' replace />:<AdminContainer />):<Navigate to='/' replace />} />
                <Route path='/admin/modificar/:id' element={user.length > 0 ? (user[0].admin !== true ? <Navigate to='/' replace />:<ModifyProduct />):<Navigate to='/' replace />} />
                <Route path='/admin/agregarproducto' element={user.length > 0 ? (user[0].admin !== true ? <Navigate to='/' replace />:<AddProductContainer />):<Navigate to='/' replace />} />

                {/*  Para toda ruta que no este declarada sera redirigido a la pagina principal */}
                <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
        </>
    );
}

export default PrivateRoute;