import Sequelize from 'sequelize'
import { sequelize } from '../database/database'

const Usuario = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    correo: {
        type: Sequelize.TEXT
    },
    constaseña: {
        type: Sequelize.TEXT
    },
    isAdmin: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
})

export default Usuario;