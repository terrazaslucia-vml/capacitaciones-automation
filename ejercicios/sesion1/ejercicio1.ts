/* 
1.Crear un archivo casos-test.ts dentro de ejercicios/sesion1. 
2.Declarar un array de al menos 5 objetos, cada uno representando un caso de prueba con: id (number), titulo (string), prioridad (string: "alta" | "media" | "baja") y ejecutado (boolean). 
3.Escribir una función contarPorPrioridad(casos) que recorra el array y devuelva cuántos casos hay de cada prioridad. 
4.Escribir una función listarPendientes(casos) que devuelva solo los casos donde ejecutado sea false. 
5.Escribir una arrow function formatearCaso(caso) que reciba un objeto caso y devuelva un string legible, por ejemplo: "#1 - Login válido (alta) - Pendiente". 
6.Al final del archivo, usar forEach para imprimir por consola todos los casos formateados con formatearCaso. 
7.Correr el archivo con npx tsx casos-test.ts y confirmar que no tira errores de tipos. 
8.Bonus: crear una clase GestorDeCasos con un array de casos como propiedad, un método agregarCaso(caso) y un método listarPendientes() que reemplace a la función homónima del punto 4. 
*/

