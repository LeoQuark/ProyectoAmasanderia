import Pool from './index'

// status(200) = solicitud exitosa
const createVenta = async (req, res) => {
    try {
        const { fecha, id_tipo_pago, id_cliente } = req.body;
        const consulta = await Pool.query('INSERT INTO compra (fecha, id_tipo_pago, id_cliente) VALUES ($1, $2, $3)', [fecha, id_tipo_pago, id_cliente]);
        // console.log(consulta)
        res.json({
            message: `venta: ${fecha} creado exitosamente`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getVentas = async (req, res) => {
    try {
        const consulta = await Pool.query('SELECT * FROM compra');
        // console.log(consulta.rows)
        res.status(200).json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getVentaById = async (req, res) => {
    try {
        const id_compra = req.params.id_compra
        const consulta = await Pool.query('SELECT * FROM compra WHERE id_compra = $1', [id_compra])
        // console.log(consulta.rows)
        res.json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const deleteVenta = async (req, res) => {
    try {
        const id_compra = req.params.id_compra
        const consulta = await Pool.query('DELETE FROM compra WHERE id_compra = $1', [id_compra])
        console.log(`compra con id ${id} eliminado`)
        res.json({
            message: `compra eliminado`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const updateVenta = async (req, res) => {
    try {
        const id_compra = req.params.id_compra
        const { fecha, id_tipo_pago, id_cliente } = req.body
        const consulta = Pool.query('UPDATE compra SET fecha = $1, id_tipo_pago = $2, id_cliente = $3 WHERE id = $3', [fecha, id_tipo_pago, id_cliente, id_compra])
        console.log(consulta)
        res.json({
            message: `venta actualizada`,
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
    createVenta,
    getVentas,
    getVentaById,
    deleteVenta,
    updateVenta
}
