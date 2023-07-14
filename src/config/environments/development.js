module.exports = {
    port_server: process.env.PORT_SERVER,
    DB: {
        host: process.env.DB_HOST,
        dialect: 'mssql',
        port: process.env.DB_PORT,
        logging: true,
        username: process.env.DB_USERNAME,
        password: process.env.BD_PASSWORD,
        database: process.env.DB,
        dialectOptions: {
            instanceName: 'SQLEXPRESS'
        }
    }
}
