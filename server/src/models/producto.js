import Sequelize from 'sequelize'
import { sequelize } from '../database/database'

const Producto = sequelize.define('producto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    categoria: {
        type: Sequelize.TEXT
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    precio: {
        type: Sequelize.INTEGER
    },
    disponible: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
})

export default Producto;