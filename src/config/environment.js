export const config = {
    mode: 'dev',
    _dev_url : 'http://localhost:3790/api/',
    _dev_socket_url : 'ws://localhost:3790/api/',
    _prod_url: '',
    _prod_socket_url: '',
    local_db: true
}

export const _SERVER_URL = config.mode === 'dev' ? config._dev_url : config._prod_url;
export const _WS_SERVER_URL = config.mode === 'dev' ? config._dev_socket_url : config._prod_socket_url;
