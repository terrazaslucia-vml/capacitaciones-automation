/* 
1.Crear un archivo casos-test.ts dentro de ejercicios/sesion1. x
2.Declarar un array de al menos 5 objetos, cada uno representando un caso de prueba con: id (number), titulo (string), 
prioridad (string: "alta" | "media" | "baja") y ejecutado (boolean). x
3.Escribir una función contarPorPrioridad(casos) que recorra el array y devuelva cuántos casos hay de cada prioridad. x
4.Escribir una función listarPendientes(casos) que devuelva solo los casos donde ejecutado sea false. x
5.Escribir una arrow function formatearCaso(caso) que reciba un objeto caso y devuelva un string legible, 
por ejemplo: "#1 - Login válido (alta) - Pendiente". x
6.Al final del archivo, usar forEach para imprimir por consola todos los casos formateados con formatearCaso. 
7.Correr el archivo con npx tsx casos-test.ts y confirmar que no tira errores de tipos. 
8.Bonus: crear una clase GestorDeCasos con un array de casos como propiedad, un método agregarCaso(caso) y un método listarPendientes() que reemplace 
a la función homónima del punto 4. 
*/

const casos = [
  { id: 1, titulo: "Login válido", prioridad: "alta", ejecutado: false },
  { id: 2, titulo: "Registro de usuario", prioridad: "media", ejecutado: true },
  { id: 3, titulo: "Recuperación de contraseña", prioridad: "baja", ejecutado: false },
  { id: 4, titulo: "Actualización de perfil", prioridad: "media", ejecutado: true },
  { id: 5, titulo: "Eliminación de cuenta", prioridad: "alta", ejecutado: false }
];

function contarPorPrioridad(casos){
    let alta = 0;
    let media = 0;
    let baja = 0;

    casos.forEach(caso => {
        if (caso.prioridad === "alta") {
            alta++;
        } else if (caso.prioridad === "media") {
            media++;
        } else if (caso.prioridad === "baja") {
            baja++;
        }
    });

    return { alta, media, baja };
}

function listarPendientes(casos){
    return casos.filter(caso => !caso.ejecutado); 
}

const formatearCaso = (caso) => {
    const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
    return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};

casos.forEach(caso => {
    console.log(formatearCaso(caso));
});

console.log("Conteo por prioridad:", contarPorPrioridad(casos));
console.log("Casos pendientes:", listarPendientes(casos));


