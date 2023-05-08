# App Task Firebase

El proyecto a continuación es resultado de una iniciativa de aprendizaje autónomo en el cual de forma estructurada y con diferentes tecnologías se da como resultado una App de Lista de Tareas.

## Tecnologías Implementadas.

- `Tridente Web`: Ya está demás decir que se ha hecho uso de las tecnologías de la web

- `React`: Gracias a la Implementación de esta librería hemos conseguido que la aplicación se sienta viva, hace que sienta que puede reaccionar a distintos estímulos del usuario. Con esta he desarrollado ciertas animaciones y he estructurado el proyecto basado en componentes reusables.

- `Redux`: Esta Librería me ha permitido manejar el estado global de mi aplicación para así llevar un control aislado sobre la información provista por medio de las acciones en la aplicación. generando con `redux-thunk` acciones asincronas para interactuar con el estado.

- `TailwindCSS`: Es muy divertido y sencillo generar templates con estilos increíbles usando tailwind!, Creo que esto dice todo. Es una tecnología que me gusta mucho por su facilidad de uso y todos los estandares que maneja. Debido a que se hace un poco complejo en el desarrollo generar tamaños para los objetos, tailwind maneja breakpoints para distintos tamaños adaptables, Esto es muy útil para diseño responsive.

- `Firestore`: Esta es la tecnología esencial por la cual la iniciativa nace. La idea de conocer y usar una base de datos como nos provee `firestore` es muy satisfactorio, ya que cuenta con una documentación muy detallada, una sintaxis con convenciones muy sencillas de comprender. En este proyecto he realizado un CRUD en el se ejecuta el manejo de una colección con documentos, cada documento pertenece a una tarea en la base de datos. Firestore es una base de datos no relacional.

## Recursos
![cap_1](./resources/app_task_firebase%20(1).png)
![cap_2](./resources/app_task_firebase%20(2).png)

## Échale un Vistazo al proyecto

```bash
    //Clonar el repositorio
    git clone https://github.com/daprionil/firebase_task_app.git

    //Acceder a la carpeta
    cd ./firebase_task_app/practica_firebase

    //Instalar todos los paquetes
    npm install

    //Generar crendeciales
        //windows
            type nul > .env.local
        //linux
            touch .env.local
```

Hasta este punto, ya tienes casi todo, Ahora debes de registrarte en firebase, crear un proyecto web en el cual al abrirlo debes buscar la sección de firestore.

> Al crear el proyecto, no te olvides de copiar las credenciales que te dan, estas van a ir en el archivo que acabas de crear, Más adelante verás cómo debes de asignarlas.


Allí en `firestore` vas a crear una colección y de nombre debes de asignar "_tasks_" y activar la opción que haga referencia a _ID Automático_. Te van a solicitar los datos para tu primer documento, allí genera uno con las propiedades _asunto_ y _descripcion_ y los valores que quieras.

### Template para archivo .env.local

Las credenciales que copiaste antes deben de verse en el siguiente formato.

```javascript
const firebaseConfig = {
  apiKey:  [data],
  authDomain: [data],
  projectId: [data],
  storageBucket: [data],
  messagingSenderId: [data],
  appId: [data]
};
```
Ahora que ya sabes cuáles crendeciales debes de tomar, vas a copiar unicamente los valores de las propiedades del objeto con formato en el ejemplo anterior y los asignarás según corresponda de esta manera reemplazando lo que dice _[credential]_ con el valor:

```env
VITE_API_KEY=[credential]
VITE_AUTH_DOMAIN=[credential]
VITE_PROJECT_ID=[credential]
VITE_STORAGE_BUCKET=[credential]
VITE_MESSAGING_SENDER_ID=[credential]
VITE_APP_ID=[credential]
```

Ahora ya puedes ejecutar:
```bash
npm run dev
```

## Sería un gran honor para mí leer tu comentario o refactor luego de usar el proyecto.