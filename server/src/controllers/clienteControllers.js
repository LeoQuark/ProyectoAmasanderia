import Pool from './index'

// status(200) = solicitud exitosa
// EN RES.JSON RESULT SERÁ TRUE=EXITOSO Y FALSE=ERROR
const createCliente = async (req, res) => {
    try {
        const { nombre, correo, direccion, comuna, telefono } = req.body;
        const consulta = await Pool.query('INSERT INTO cliente (nombre,correo,direccion,comuna,telefono) VALUES ($1, $2, $3, $4, $5)', [nombre, correo, direccion, comuna, telefono]);
        console.log(consulta)
        res.json({
            message: `cliente: ${nombre} creado exitosamente`,
            result: true
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`,
            result: false
        })
    }
}

const getClientes = async (req, res) => {
    try {
        const consulta = await Pool.query('SELECT * FROM cliente');
        console.log(consulta.rows)
        res.json({
            data: consulta.rows,
            result: true
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`,
            result: false
        })
    }
}

const getClienteById = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente
        const consulta = await Pool.query('SELECT * FROM cliente WHERE id_cliente = $1', [id_cliente])
        console.log(consulta.rows)
        res.json({
            data: consulta.rows,
            result: true
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`,
            result: false
        })
    }
}

const deleteCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente
        const consulta = await Pool.query('DELETE FROM cliente WHERE id_cliente = $1', [id_cliente])
        console.log(`cliente con id ${id} eliminado`)
        res.json({
            message: `cliente eliminado`,
            result: true
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`,
            result: false
        })
    }
}

const updateCliente = async (req, res) => {
    try {
        const id_cliente = req.params.id_cliente
        const { nombre, correo, direccion, comuna, telefono } = req.body
        const consulta = Pool.query('UPDATE cliente SET nombre = $1, correo = $2, direccion = $3, comuna = $4, telefono = $5 WHERE id_cliente = $6', [nombre, correo, direccion, comuna, telefono, id_cliente])
        console.log(consulta)
        res.json({
            message: `cliente actualizado`,
            data: consulta.rows,
            result: true
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`,
            result: false
        })
    }
}

module.exports = {
    createCliente,
    getClientes,
    getClienteById,
    deleteCliente,
    updateCliente
}
