
import Pool from './index'

// status(200) = solicitud exitosa
const createCliente = async (req, res) => {
    try {
        const { nombre, correo, direccion, comuna, telefono } = req.body;
        const consulta = await Pool.query('INSERT INTO cliente (nombre,correo,direccion,comuna,telefono) VALUES ($1, $2, $3, $4, $5)', [nombre, correo, direccion, comuna, telefono]);
        console.log(consulta)
        res.json({
            message: `cliente: ${nombre} creado exitosamente`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getClientes = async (req, res) => {
    try {
        const consulta = await Pool.query('SELECT * FROM cliente');
        console.log(consulta.rows)
        res.status(200).json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getClienteById = async (req, res) => {
    try {
        const id = req.params.id
        const consulta = await Pool.query('SELECT * FROM cliente WHERE id = $1', [id])
        console.log(consulta.rows)
        res.json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const deleteCliente = async (req, res) => {
    try {
        const id = req.params.id
        const consulta = await Pool.query('DELETE FROM cliente WHERE id = $1', [id])
        console.log(`cliente con id ${id} eliminado`)
        res.json({
            message: `cliente eliminado`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const updateCliente = async (req, res) => {
    try {
        const id = req.params.id
        const { nombre, correo, direccion, comuna, telefono } = req.body
        const consulta = Pool.query('UPDATE cliente SET nombre = $1, correo = $2, direccion = $3, comuna = $4, telefono = $5 WHERE id = $6', [nombre, correo, direccion, comuna, telefono])
        console.log(consulta)
        res.json({
            message: `cliente actualizado`,
            data: consulta.rows
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`,
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
