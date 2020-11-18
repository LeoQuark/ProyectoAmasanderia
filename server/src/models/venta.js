import Sequelize from 'sequelize'
import { FOREIGNKEYS } from 'sequelize/types/lib/query-types'
import { sequelize } from '../database/database'
import Cliente from './cliente'

const Venta = sequelize.define('venta', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    idCliente: {
        type: Sequelize.INTEGER
    },
    tipoPago: {
        type: Sequelize.TEXT
    },
    fecha: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Venta.belongsToMany(Cliente, { foreingKey: 'id' });

export default Venta;