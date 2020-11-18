import Sequelize from 'sequelize';

/*
    configuraciones para sequilize
    -nombre db,
    -nombre usuario,
    -password,
    -configuraciones
    -logging = muestra las acciones que va realizando por consola
*/

const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'conchetumadre123',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

export default sequelize;