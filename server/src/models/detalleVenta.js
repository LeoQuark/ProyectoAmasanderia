import Sequelize from 'sequelize'
import { sequelize } from '../database/database'
import Productos from './producto';
import Producto from './producto'

const detalleVenta = sequelize.define('detalleventa', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    idProducto: {
        type: Sequelize.INTEGER
    },
    idVenta: {
        type: Sequelize.INTEGER
    },
    cantidad: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

detalleVenta.belongsToMany(Producto)

export default detalleVenta;