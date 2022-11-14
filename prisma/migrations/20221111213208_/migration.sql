-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "numerocedula" INTEGER NOT NULL,
    "tipocedula" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cuentas" (
    "id" SERIAL NOT NULL,
    "tipodecuenta" TEXT NOT NULL,
    "numerodecuenta" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "moneda" TEXT NOT NULL,
    "idusuario" INTEGER NOT NULL,

    CONSTRAINT "cuentas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transacciones" (
    "id" SERIAL NOT NULL,
    "tipotransaccion" TEXT NOT NULL,
    "numerotransaccion" INTEGER NOT NULL,
    "monto" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cuentadeorigen" INTEGER NOT NULL,
    "cuentadedestino" INTEGER NOT NULL,
    "idcuenta" INTEGER NOT NULL,

    CONSTRAINT "transacciones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_password_key" ON "usuario"("password");

-- CreateIndex
CREATE UNIQUE INDEX "cuentas_numerodecuenta_key" ON "cuentas"("numerodecuenta");

-- CreateIndex
CREATE UNIQUE INDEX "transacciones_numerotransaccion_key" ON "transacciones"("numerotransaccion");

-- AddForeignKey
ALTER TABLE "cuentas" ADD CONSTRAINT "cuentas_idusuario_fkey" FOREIGN KEY ("idusuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transacciones" ADD CONSTRAINT "transacciones_idcuenta_fkey" FOREIGN KEY ("idcuenta") REFERENCES "cuentas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
