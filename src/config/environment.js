const _server_url = '192.168.0.153:3790';
export const config = {
    mode: 'dev',
    _dev_url : `http://${_server_url}/api/`,
    _dev_socket_url : `ws://${_server_url}/api/`,
    _prod_url: '',
    _prod_socket_url: '',
}

export const _SERVER_URL = config.mode === 'dev' ? config._dev_url : config._prod_url;
export const _WS_SERVER_URL = config.mode === 'dev' ? config._dev_socket_url : config._prod_socket_url;
export const _STORAGE_PREFIX = '__openui__';