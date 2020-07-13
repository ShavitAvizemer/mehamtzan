export const config = {
    SERVER_PORT: process.env.PORT || 3200,
    connectionDB: `mongodb://${process.env.DB_URL || 'localhost:27017/awx'}`,
    options: {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false
    },
    AWX_URL: 'awx-avi.northeurope.cloudapp.azure.com',
    PATH: '/api/v2/',
    awx_auth_username: 'admin',
    awx_auth_password: 'rabotadamoy',
}
