#  API cooperativats
Ejercicio 1
InstruccionesDesarrolle una Expressive RESTful API para solucionar el problema planteado usando elsiguientetech stack:-NodeJS/ExpressJS-Prisma-PostgreSQL-TypeScript-Git-GitHubUsar un solo repositorio alojado en GitHub donde la versión final del codigo se encuentre en elbranch principal (Main o Master).Un solo compañero puede hacer la entrega del link al repositorio donde se encuentra la tarea.Descripción del problemaUna pequeña cooperativa del sector educación desea adquirir sus servicios como empresadesarrolladora de software para implementar la primera iteración de su backoffice.Se requiere del sistema financiero principal, este consta inicialmente de los siguientes módulos:1.Usuarios2.Cuentas3.TransaccionesLa relación entre estos se da de la siguiente manera:●Un Usuario tiene una o muchas cuentas, pero como mínimo una.○Relacion:1 - N, con condicion:1+ - N.●Muchas Cuentas pueden realizar muchas Transacciones.○Relacion:N - N, con condicion:2 - N.○Una Transaccion esta relacionada adoscuentas, unaoriginaria y unarecipiente, la Transaccion aparece en la lista de transacciones de ambascuentas.Todas las instancias de datos para usuarios, cuentas y transacciones poseen su llamado “ID desistema” (único, autoincrementable), esenoes lomismo que: Numero de usuario, numero decuenta y numero de transaccion.
Es su trabajo como profesionales de la programación el abstraer y describir las propiedadesque mejor representen los módulos mencionados.
