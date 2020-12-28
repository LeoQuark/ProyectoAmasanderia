import Pool from './index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// status(200) = solicitud exitosa
const login = async (req, res) => {
    try {
        const { correo, password } = req.body
        // buscar usuario por su correo
        const consultaUsuario = await Pool.query('SELECT * FROM admin WHERE correo = $1', [correo])
        const usuario = consultaUsuario.rows[0]
        // console.log(usuario.rows[0])
        // console.log(consultaUsuario.rows[0])

        if (consultaUsuario.rows[0]) {
            // console.log("existe")
            const isOk = await bcrypt.compare(password, consultaUsuario.rows[0].password)
            console.log(isOk)
            if (isOk) {
                console.log("leooo")
                res.json({
                    data: consultaUsuario.rows,
                    status: true
                })
            } else {
                res.json({
                    status: false
                })
            }
        } else {
            res.json({
                status: false
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}


const createAdmin = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;

        // ENCRIPTO LA CONTRASEÑA
        const pass = await bcrypt.hash(password, 15)
        // CREAR EL USUARIO
        const newUser = await Pool.query('INSERT INTO admin (nombre,correo,password) VALUES ($1, $2, $3)', [nombre, correo, pass]);
        // console.log(consulta)
        res.json({
            message: `admin: ${nombre} creado exitosamente`,
            status: true,
        })
    } catch (err) {
        console.log(err)
        res.json({
            message: `error: ${err}`,
            status: false
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
    login,
    getAdmin,
    createAdmin,
    getAdminById,
    deleteAdmin,
    updateAdmin
}
