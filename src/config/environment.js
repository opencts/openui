
const config = {
    mode: 'dev',
    _dev_url : 'http://localhost:4200/',
    _prod_url: ''
}

export const _SERVER_URL = config.mode === 'dev' ? config._dev_url : config._prod_url;