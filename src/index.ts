//UNIMOS TODO AQUI, PARA QUE NO HAYA CONFUSIONES
// #1
import { PrismaClient } from '@prisma/client'
import express from 'express'

// #2
const prisma = new PrismaClient()

// #3
const app = express()

// #4
app.use(express.json())

//TABLA USUARIO
//get usuario
app.get('/usuario', async (req, res) => {
    const usuario = await prisma.usuario.findMany()
    res.json(usuario)
})
//post usuario
app.post('/usuario', async (req, res) => {
    const { name, lastname, email, password, numerocedula, tipocedula, telefono, direccion } = req.body
    const newusuario = await prisma.usuario.create({
        data: {
            name,
            lastname,
            email,
            password,
            numerocedula,
            tipocedula,
            telefono,
            direccion,
        },
    })
    res.json(newusuario)
})
//get usuario by id
app.get('/usuario/:id', async (req, res) => {
    const { id } = req.params
    const usuario = await prisma.usuario.findUnique({
        where: {
            id: Number(id),
        },  
    })
    res.json(usuario)
})
//update usuario
app.put('/usuario/:id', async (req, res) => {
    const { id } = req.params
    const { name, lastname, email, password, numerocedula, tipocedula, telefono, direccion } = req.body
    const usuario = await prisma.usuario.update({
        where: {
            id: Number(id),
        },  
        data: {
            name,
            lastname,
            email,
            password,
            numerocedula,
            tipocedula,
            telefono,
            direccion,
        },
    })
    res.json(usuario)
})
//TABLA CUENTA
//post cuenta
app.post("/cuentas", async (req, res) => {
  const newcuentas = await prisma.cuentas.create({
      data: req.body,
  });
  console.log("Nueva cuenta agregada: ", newcuentas);
  res.json(newcuentas);
});
//get cuenta
app.get("/cuentas", async (req, res) => {
  const cuentas = await prisma.cuentas.findMany({include:{usuario:true}});;
  res.json(cuentas);
});

//get cuenta by id
app.get("/cuentas/:id", async (req, res) => {
  const { id } = req.params;
  const cuentas = await prisma.cuentas.findUnique({include: { usuario: true}, where: { id: Number(id) }});
  res.json(cuentas);
});




//TRANSACCIONES
//post transacciones
app.post("/transacciones", async (req, res) => {
  const newtransacciones = await prisma.transacciones.create({
      data: req.body,
  });
  console.log("Nueva transaccion agregada: ", newtransacciones);
  res.json(newtransacciones);
});
//get transacciones
app.get("/transacciones", async (req, res) => {
  const transacciones = await prisma.transacciones.findMany({include:{cuentas:true}});;
  res.json(transacciones);
});
//get transacciones by id
app.get("/transacciones/:id", async (req, res) => {
  const { id } = req.params;
  const transacciones = await prisma.cuentas.findUnique({include: { usuario: true}, where: { id: Number(id) }});
  res.json(transacciones);
});
//update transacciones
app.put("/transacciones/:id", async (req, res) => {
  const { id } = req.params
  const { tipotransaccion, numerotransaccion, monto, fecha, cuentadeorigen, cuentadedestino} = req.body
  const transacciones = await prisma.transacciones.update({
      where: {
          id: Number(id),
      },
      data: {
          tipotransaccion,
          numerotransaccion,
          monto,
          fecha,
          cuentadeorigen,
          cuentadedestino,
      },
  })
  res.json(transacciones)
})




app.use((req, res, next) => {
    res.status(404);
    return res.json({
      success: false,
      payload: null,
      message: `API SAYS: Endpoint not found for path: ${req.path}`,
    });
  });

// #6
app.listen(8000, () =>
  console.log('🚀 App corriendo 100%ciento and listening on port 8000'),
)

