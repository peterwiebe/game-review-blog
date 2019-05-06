const env = process.env.NODE_ENV || 'development'

const baseConfig = {
    env,
    isDev: env === 'development',
    isTest: env === 'testing',
    port: 5000,
}

let envConfig = {}

switch (env) {
    // For 'test' or 'testing' use .test config
    case 'test':
    case 'testing':
        envConfig = require('./test').config
        break
    // For 'dev', 'development', or any other case use .dev config
    default:
        envConfig = require('./dev').config
        break
}

export default {...baseConfig, ...envConfig}
