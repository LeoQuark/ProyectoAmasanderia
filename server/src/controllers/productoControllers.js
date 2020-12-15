import Pool from './index'

// status(200) = solicitud exitosa
const createProducto = async (req, res) => {
    try {
        const { nombre, categoria, descripcion, precio, stock, imagen } = req.body;
        const consulta = await Pool.query('INSERT INTO producto (nombre,categoria,descripcion,precio,stock,imagen) VALUES ($1, $2, $3, $4, $5, $6)', [nombre, categoria, descripcion, precio, stock, imagen]);
        console.log(consulta)
        res.json({
            message: `producto: ${nombre} creado exitosamente`,
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

const getProductos = async (req, res) => {
    try {
        const consulta = await Pool.query('SELECT * FROM producto');
        // console.log(consulta.rows)
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

const getProductoById = async (req, res) => {
    try {
        const id_producto = req.params.id
        const consulta = await Pool.query('SELECT * FROM producto WHERE id_producto = $1', [id_producto])
        // console.log(consulta.rows)
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

const deleteProducto = async (req, res) => {
    try {
        const id_producto = req.params.id
        const consulta = await Pool.query('DELETE FROM producto WHERE id_producto = $1', [id_producto])
        console.log(`producto con id ${id_producto} eliminado`)
        res.json({
            message: `producto eliminado`,
            result: true
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: err,
            result: false
        })
    }
}

const updateProducto = async (req, res) => {
    try {
        const id_producto = req.params.id
        const { nombre, categoria, descripcion, precio, disponible } = req.body
        const consulta = Pool.query('UPDATE producto SET nombre = $1, categoria = $2, descripcion = $3, precio = $4, disponiblle = $5 WHERE id_producto = $6', [nombre, categoria, descripcion, precio, disponible, id_producto])
        // console.log(consulta)
        res.json({
            message: `producto actualizado`,
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
    createProducto,
    getProductos,
    getProductoById,
    deleteProducto,
    updateProducto
}
