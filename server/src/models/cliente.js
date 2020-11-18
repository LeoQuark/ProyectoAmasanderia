import Sequelize from 'sequelize'
import { sequelize } from '../database/database'

const Cliente = sequelize.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    direccion: {
        type: Sequelize.TEXT
    },
    comuna: {
        type: Sequelize.TEXT
    },
    telefono: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})

export default Cliente;