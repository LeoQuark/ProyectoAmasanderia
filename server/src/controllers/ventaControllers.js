import Pool from './index'

// status(200) = solicitud exitosa
const createProducto = async (req, res) => {
    try {
        const { nombre, categoria, descripcion, precio, disponible, imagen } = req.body;
        const consulta = await Pool.query('INSERT INTO producto (nombre,categoria,descripcion,precio,disponible,imagen) VALUES ($1, $2, $3, $4, $5, $6)', [nombre, categoria, descripcion, precio, disponible, imagen]);
        console.log(consulta)
        res.json({
            message: `producto: ${nombre} creado exitosamente`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getProductos = async (req, res) => {
    try {
        const consulta = await Pool.query('SELECT * FROM producto');
        console.log(consulta.rows)
        res.status(200).json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getProductoById = async (req, res) => {
    try {
        const id = req.params.id
        const consulta = await Pool.query('SELECT * FROM producto WHERE id = $1', [id])
        console.log(consulta.rows)
        res.json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const deleteProducto = async (req, res) => {
    try {
        const id = req.params.id
        const consulta = await Pool.query('DELETE FROM producto WHERE id = $1', [id])
        console.log(`producto con id ${id} eliminado`)
        res.json({
            message: `producto eliminado`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const updateProducto = async (req, res) => {
    try {
        const id = req.params.id
        const { nombre, categoria, descripcion, precio, disponible } = req.body
        const consulta = Pool.query('UPDATE producto SET nombre = $1, categoria = $2, descripcion = $3, precio = $4, disponiblle = $5 WHERE id = $6', [nombre, categoria, descripcion, precio, disponible, id])
        console.log(consulta)
        res.json({
            message: `producto actualizado`,
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
    createProducto,
    getProductos,
    getProductoById,
    deleteProducto,
    updateProducto
}
