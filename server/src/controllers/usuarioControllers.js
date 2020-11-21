import Pool from './index'

// status(200) = solicitud exitosa
const createUsuario = async (req, res) => {
    try {
        const { nombre, correo, password, isadmin } = req.body;
        const consulta = await Pool.query('INSERT INTO usuario (nombre,correo,password,isadmin) VALUES ($1, $2, $3, $4)', [nombre, correo, password, isadmin]);
        console.log(consulta)
        res.json({
            message: `usuario: ${nombre} creado exitosamente`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getUsuarios = async (req, res) => {
    try {
        const consulta = await Pool.query('SELECT * FROM usuario');
        console.log(consulta.rows)
        res.status(200).json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getUsuarioById = async (req, res) => {
    try {
        const id = req.params.id
        const consulta = await Pool.query('SELECT * FROM usuario WHERE id = $1', [id])
        console.log(consulta.rows)
        res.json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }

}

const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const consulta = await Pool.query('DELETE FROM usuario WHERE id = $1', [id])
        console.log(`usuario con id ${id} eliminado`)
        res.json({
            message: `usuario eliminado`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const { nombre, correo, password, isadmin } = req.body
        const consulta = Pool.query('UPDATE usuario SET nombre = $1, correo = $2, password = $3, isadmin = $4 WHERE id = $5', [nombre, correo, password, isadmin, id])
        console.log(consulta)
        res.json({
            message: `usuario actualizado`,
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
    getUsuarios,
    createUsuario,
    getUsuarioById,
    deleteUsuario,
    updateUsuario
}
