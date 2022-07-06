import { db } from '../../../../Firebase/config'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc } from 'firebase/firestore'

const queryCollection = collection(db, 'users')



//Funcion GetUserFirebase devolvera un usuario, dependiendo de los requisitos. 
//Se ha agregado un parametro data.Nombre, debido a que esta funcion se reutiliza en el momento de registrar un nuevo usuario.
function GetUserFirebase(data) {  
    const queryCollectionFilter = data.Nombre ? query(queryCollection, where('Usuario', '==', data.Usuario)) : query(queryCollection, where('Usuario', '==', data.User), where('Password', '==', data.Password))
    return getDocs(queryCollectionFilter)
}


//Funcion SignInFirebase maneja la logica para registrar un nuevo usuario.
//Primero verifica si el usuario existe, en caso negativo procede a registrarlo.
function SignInFirebase(data) {    
    const storage = getStorage()
    const imageRef = ref(storage, `Fotos/${data.Usuario}`)
    const metadata = {
        cacheControl: 'public,max-age=300',
        contentType: 'image/jpeg'
    };
    //Primero subimos la imagen cargada por el usuario al Storage de Firebase. 
    //La imagen estara identificada con el nombre del usuario creado por el cliente.
    uploadBytesResumable(imageRef, data.Foto[0], metadata)
        .then((snapshot) => {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log('File metadata:', snapshot.metadata);


            // Una vez subida la imagen a Storage de Firebase, se obtiene el link de la foto y se crea el usuario
            getDownloadURL(snapshot.ref).then((url) => {
                addDoc(queryCollection, {
                    Nombre: data.Nombre,
                    Apellido: data.Apellido,
                    Email: data.Email,
                    Telefono: data.Telefono,
                    Usuario: data.Usuario,
                    Password: data.Password,
                    Foto: url,
                    admin: false //La variable Admin viene por defecto en false. 
                    //En caso de necesitar un user Admin, puede modificarse. 
                    //Las cuentas admin poseen derechos sobre el panel principal de productos.                         
                })
                    .catch((error) => console.error('No fue posible crear el usuario', error));
            })

                .catch((error) => {
                    console.error('No fue posible subir la imagen al storage de Firebase', error);
                })
        })
}


export { GetUserFirebase, SignInFirebase }
