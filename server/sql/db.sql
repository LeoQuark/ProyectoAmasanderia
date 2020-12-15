-- crear bd y listar(ver) con \l
-- para acceder a una bd = \c nombreBD

CREATE DATABASE amasanderia;

CREATE TABLE IF NOT EXISTS admin(
    id_admin  integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre  text NOT NULL,
    correo  text NOT NULL,
    password    text NOT NULL
);


CREATE TABLE IF NOT EXISTS producto(
    id_producto  integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre text NOT NULL CHECK (nombre <> ''),
    descripcion text,
    precio text, 
    stock text,
    imagen text,
    categoria text
);

CREATE TABLE IF NOT EXISTS tipoPago(
    id_tipo_pago integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    tipo_pago text
);

CREATE TABLE IF NOT EXISTS compra(
    id_compra integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    fecha timestamp,
    id_tipo_pago integer REFERENCES tipoPago(id_tipo_pago),
    id_cliente integer REFERENCES cliente(id_cliente)
);

CREATE TABLE IF NOT EXISTS detalleCompra(
    id_detalle_compra integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    cantidad integer NOT NULL,
    id_producto integer REFERENCES producto(id_producto),
    id_compra integer REFERENCES compra(id_compra)
);

CREATE TABLE IF NOT EXISTS cliente(
    id_cliente integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre  text NOT NULL CHECK (nombre <> ''),
    correo text NOT NULL,
    direccion   text NOT NULL,
    telefono    text NOT NULL,
    comuna text
);



-- VALUES FOR USUARIO
INSERT INTO usuario(nombre,correo,password,isAdmin)
    VALUES('Leonardo Peña','leonardo.penaf@utem.cl','admin',true);


-- VALUES FOR PRODUCTO
INSERT INTO producto(nombre,categoria,descripcion,precio,disponible)
    VALUES('Pan amasado 1kg','panaderia','Rico pan amasado casero', 990,true);

INSERT INTO producto(nombre,categoria,descripcion,precio,disponible)
    VALUES('Torta mil hojas','pasteleria','Exquisita torta de mil hojas para 10 personas', 8900,true);

INSERT INTO producto(nombre,categoria,descripcion,precio,disponible)
    VALUES('Azucar iansa 1kg','almacen','Azucar blanca iansa', 1190,true);


-- VALUES FOR CLIENTE
INSERT INTO cliente(nombre,direccion,comuna,telefono)
    VALUES('Leonardo Peña Fuentes','Av Vicuña Mackenna 7110','La Florida',958420520);

INSERT INTO cliente(nombre,direccion,comuna,telefono)
    VALUES('Alonso Pino Chung','Las Rosas 1312','Quilicura',956302120);


-- VALUES FOR VENTA
INSERT INTO venta(idCliente,tipoPago,fecha)
    VALUES(1,'debito','2020-10-20 19:10:25');

INSERT INTO venta(idCliente,tipoPago,fecha)
    VALUES(5,'debito','2020-09-20 12:09:23');


-- VALUES FOR DETALLEVENTA
INSERT INTO detalleVenta(idProducto,idVenta,cantidad)
    VALUES(1,2,1);

INSERT INTO detalleVenta(idProducto,idVenta,cantidad)
    VALUES(3,3,2);

