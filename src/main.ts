//PARA PROBAR UN DATO SI LA DATABASE SIRVE
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const newusuario = await prisma.usuario.create({
        data: {
            name: "Juan",
            lastname: "Perez",
            email: "juan.perez@gmail.com",
            password: "juan123",
            numerocedula: 12345678,
            tipocedula: "Nacional",
            telefono: 78981234,
            direccion: "De la pulperia a 100 metros",
            
        },
    });
    console.log("Usuario Creado",newusuario);
}




main()
    .catch((e) => {
        throw e;
    }
    )
    .finally(async () => {
        await prisma.$disconnect();
    }
    );













