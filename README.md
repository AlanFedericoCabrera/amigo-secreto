<h1 align="center"> One Alura - Challenge de Amigo Secreto </h1>

<p align="center">
  <img width="722" height="224" alt="Screenshot 2025-08-04 150445" src="https://github.com/user-attachments/assets/bf38afb8-a061-4db1-ac5b-d11c65e85017" />
</p>

<h2> Descripcion</h2>
Se presenta un poyecto del Challenge de One Alura, llamado "Amigo secreto" para este desafio se uso la logica de programacion. Esta desarrolado con JavaScript, implementado con lo aprendido 
(funciones, arreglos, logica de programacion).

<h2>Estado</h2>
👨🏼‍💻Proyecto FINALIZADO👨🏼‍💻

<h2>Forma de uso</h2>
<img width="1266" height="576" alt="Screenshot 2025-08-04 152356" src="https://github.com/user-attachments/assets/aa2cda49-94a2-45ed-a759-fd4abf438e73" />
1- Ingresar los nombres de los amigos que deseas sortear para amigo secreto... Pulsa "añadir" para agregar a tus amigos al sorteo:
<img width="1266" height="579" alt="image" src="https://github.com/user-attachments/assets/10a479f9-4341-4bb5-bc7f-207c7495cf07" />
2- Cuando ya hayas ingresado a todos tus amigos, aprieta el boton "Sortear amigo", para que seleccione el amigo secreto:
<img width="1261" height="578" alt="image" src="https://github.com/user-attachments/assets/3f2ccd5f-c1fd-4540-a893-b2aded073f9e" />

<h2>¿Como funciona el codigo?</h2>
1 - Creamos la lista y la inicializamos vacia:
<img width="726" height="330" alt="code" src="https://github.com/user-attachments/assets/4285374b-1b94-4a29-b60a-fac54f3778ab" />

2 - Creamos la funcion "asignarTexto", para poder modificar las etiquetas a nuestro gusto. Usamos document.querySelector() para seleccionar elementos especificos de HTML y tambien usamos innerHTML para poder remplazar el contenido de la caja. 
<img width="1142" height="520" alt="code" src="https://github.com/user-attachments/assets/41f180fa-65e6-4f82-ac78-187390c01a26" />
3 - Creamos la funcion "agregarAmigos()", donde tomamos los valores del campo input y los agremos a listaAmigosAgregar con push. Usamos el ciclo for, para poder ordenar los nombres uno debajo del otro. al dar click en "añadir", se reinicia el campo y queda en blanco y 
printeamos los nombres debajo del campo de entada.
<img width="1572" height="1090" alt="code" src="https://github.com/user-attachments/assets/36002f74-4720-4ffa-b64d-52c71cb88e99" />
4 - Cremos la funcion "sortearAmigo()", implementamos Math y ponemos un limite de maximo con "listaAmigosAgregar.length", donde el limite es la cantidad de elemento de la lista. Verificamos si la lista tiene elementos, si tiene: Pasamos el amigo seleccionado a 
"amigoSeleccionado", restablecemos la lista de amigos, mostramos el seleccionado y limpiamos listaAmigosAgregar, si no cumple, se le avisa con un aler.
<img width="1988" height="900" alt="code" src="https://github.com/user-attachments/assets/4e6e5c67-ca64-49a1-8b15-d25b12e50746" />

