## Sobre el proyecto

Ecommerce sobre productos Japoneses desarrollado en React como parte del proyecto correspondiente al curso de CoderHouse.
+ Autor: Gustavo Herrador
+ Comision: 31165


## Navegacion
+ Home con productos
+ Pantalla de producto con detalle del mismo. Ademas incluye de forma seleccionable entre 1 a 5 fotos disponibles para cada producto. También es posible realizar zoom a la imagen en la zona deseada para observar con mayor claridad los detalles.
+ Menu NavBar con selector de categorias por producto. 
+ NavBar con carrito
+ Se ha desarrollado con base de datos de Firebase, un sistema de logeo. Este permite registrarse y autentificarse en la pagina, mediante registro local. También es posible acceder mediante Facebook o Gmail.


## Registro de usuario y servico Login

- La pagina cuenta con un usuario especial Admin (User Admin, Password Admin). Esto habilita rutas protegidas no visibles para los clientes normales. Mediante el acceso Admin, es posible modificar productos como asi tambien agregar productos nuevos.

- Para realizar las compras, la pagina requiere que exista un usuario logeado. Caso contrario, no permitira finalizar su compra.

Para dicho fin se han implementado distintas alternativas:

- Se ha implementado en la pagina un servicio de registro para usuarios nativo. La misma esta compuesta de un formulario en el cual debera completar todos los datos requeridos. Ademas es posible subir una imagen la cual sera utilizada como su avatar.

- Los usuarios pueden acceder a la pagina mediante el servicio de Google y Facebook


## Carrito y Finalizar Compra

- Cuando el usuario decide finalizar su compra, podra acceder a su carrito  mediante el widget en el navbar o bien, despues de agregar un producto.

- Se ha implementado un formulario de tarjeta de credito mediante la herramienta react-credit-cards. Este da animacion a la tarjeta, ademas de permitir una experiencia de usuario mas comoda.

- Cuando el usuario finaliza su compra, se enviara a la casilla de correo del usuario toda la informacion de su compra, ademas del listado de productos comprados. Esto mediante la herramienta EmailJs

- El carrito posee botones de accion en cada producto, lo que le permitira modificar la cantidad de producto comprada como asi tambien eliminar el producto.

- Ademas se dispone de un boton para vaciar el carrito. Este boton elimina todos los productos


## Detalle del producto

- Se utiliza libreria React-Magnifier para dar animación de lupa al pasar sobre la imagen en el detalle del producto

- Cada producto dispone de entre 1 a 5 fotos para brindar mas detalle del producto al cliente.

- Se dispone de un contador, lo que permitira agregar la cantidad deseada de productos siempre y cuando no se sobrepase el stock.

- En el detalle del producto, al agregar un articulo a nuestro carrito se muestra, haciendo uso de SweetAlert, una alerta con la cantidad de items que el usuario ha agregado.


## Aspecto de la pagina

- El aspecto de la pagina fue configurado con BootStrap

- Se han realizado retoques propios para mejorar la experiencia de usuario.


## Alertas

- Se han implementado una serie de alertas mediante SweetAlert. Esto con la finalizada de informar al usuario cuando se realiza una compra o cuando, por un error es necesario realizar algun paso adicional.



## Base de datos

- Se ha utilizado el servicio de Firebase para configurar el sistema de logeo. Se han utilizado opciones para Facebook, Gmail y registro local. Este ultimo posee la posibilidad de subir una imagen que sera utilizada como avatar de usuario.
  
- Base de datos de productos en Firebase. Esta base de datos cuenta con las secciones de:
  + Ordenes: En ella va la orden final del usuario. Con los datos del usuario y detalle de cada producto comprado
  + Productos: Base de datos de todos los productos que se muestran en la pagina
  + User: Registro local de usuario (Login y password)

  

## Rutas Publicas y Privadas

- Se disponen de rutas publicas:
  - Main
  - Categorias por Id de categoria(Adorno, Utiles de Cocina, Comidas, Bebidas, Dulces)
  - Login y Registro de usuario
  - Detalle de producto por su Id
  - Carrito

- Se disponen de rutas privadas (Solo Admin):
  - Se dispone de usuario y contraseña para rutas Admin (Usuario: Admin, Password: Admin) 
  - Modificacion de producto
  - Agregar nuevo producto
  - Las rutas privadas pueden ser revisadas en la carpeta helpers.


## Estructura

- Se implemento una estructura MVC (modificada)
  - Dao(Data Access Object): Aqui esta la logica que interviene directamente con la base de datos
  - Context: Aquellos que interactuan con el Dao (vienen a asemejarse a los controllers)
  - Container: Logica entre un Context y la vista (Vienen a asemejar a los services)
  - Vistas

 

## En el directorio del proyecto se debe ingresar en la consola:

### `npm start`

De esta forma se inicia en forma local y se puede acceder en [http://localhost:3000](http://localhost:3000)
para verlo en el navegador.

Al realizar cualquier modificación en el código, se hará un reload mostrando los cambios.


## Documentación de React

Acceder a [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).


## Registro y Login de Usuario (Registro Local)
![React-App-Google-Chrome-2022-06-22-19-17-04](https://user-images.githubusercontent.com/82460834/175165698-fa73ff67-499f-4406-be0e-750a7c772aa7.gif)


## Rutas Admin (Se modifica un producto y se accede a formulario "Cargar Producto")
![React-App-Google-Chrome-2022-06-22-19-17-47](https://user-images.githubusercontent.com/82460834/175165868-58ca6737-8ca3-4325-ada7-6ddbbd7c5874.gif)

## Compra de producto por Cliente
![React-App-Google-Chrome-2022-06-22-19-34-36](https://user-images.githubusercontent.com/82460834/175165924-c9aa5057-84de-48bd-820d-c1f1968dc690.gif)



