### Angular proyecto clone de Instagram 
Este es un proyecto tipo red social estilo Instagram, en el cual posee Login con la cuenta prueba@mail.com  y contraseña 1234560, en esta aplicación podemos ver post de otros usuario y los comentarios de cada post, también crear nuestros post y también ver solo nuestros post,  los label e información está en inglés,  espero que les guste la aplicación.  

## Dependencias y librerías
•	Angular 10
•	Firebase para la autenticación
•	Angular material como framework css
•	Angula router para la navegación de paginas
•	sweetalert2 para las alertas

## Api
•	https://gorest.co.in/public-api/  para  consumir post, comentarios y usuarios 
•	https://dog.ceo/  para consumir imágenes de post y avatar
•	AIzaSyCjLvlfAi47-tDMeXCbusFRjanGU1xpnTQ key de api firebase para login

## Componentes y carpetas
     
Componentes principales => home == contendor de rutas  y  login == componente que contiene el login

View => add-post == componente donde se puede añadir un nuevo post, 
 header == encabezado del app donde están los botones y logo ,
 mypost == componente donde me muestra los post de mi usuario , 
 post == componente donde muestra todos los post 

Config => contiene global donde se encuentran las rutas 
Service => contiene los métodos para consumir los servicios
Environments => contiene las variables de entorno donde encontramos el Access token de https://gorest.co.in/

## instalación

•	Clonar el repositorio git clone 
•	npm install  == para instalar node_modules y dependencias 
•	ng serve  o  npm start



