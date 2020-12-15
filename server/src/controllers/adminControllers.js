import Pool from './index'

// status(200) = solicitud exitosa
const createAdmin = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;
        const consulta = await Pool.query('INSERT INTO admin (nombre,correo,password) VALUES ($1, $2, $3)', [nombre, correo, password]);
        // console.log(consulta)
        res.json({
            message: `admin: ${nombre} creado exitosamente`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getAdmin = async (req, res) => {
    try {
        const consulta = await Pool.query('SELECT * FROM admin');
        // console.log(consulta.rows)
        res.status(200).json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const getAdminById = async (req, res) => {
    try {
        const id_admin = req.params.id_admin
        const consulta = await Pool.query('SELECT * FROM admin WHERE id_admin = $1', [id_admin])
        // console.log(consulta.rows)
        res.json(consulta.rows)
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }

}

const deleteAdmin = async (req, res) => {
    try {
        const id_admin = req.params.id_admin
        const consulta = await Pool.query('DELETE FROM admin WHERE id_admin = $1', [id_admin])
        console.log(`admin con id ${id} eliminado`)
        res.json({
            message: `admin eliminado`
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const updateAdmin = async (req, res) => {
    try {
        const id_admin = req.params.id_admin
        const { nombre, correo, password } = req.body
        const consulta = Pool.query('UPDATE admin SET nombre = $1, correo = $2, password = $3 WHERE id_admin = $4', [nombre, correo, password, id_admin])
        // console.log(consulta)
        res.json({
            message: `admin actualizado`,
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
    getAdmin,
    createAdmin,
    getAdminById,
    deleteAdmin,
    updateAdmin
}
