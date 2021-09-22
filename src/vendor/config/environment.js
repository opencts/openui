import loadedConfig from '/config.json';

const _server_url = loadedConfig.server_base;
const config = {
    mode: loadedConfig.mode,
    _dev_url: `http://${_server_url}/api/`,
    _dev_socket_url: `ws://${_server_url}/api/`,
    _prod_url: '',
    _prod_socket_url: '',
};

export const _SERVER_URL = config.mode === 'dev' ? config._dev_url : config._prod_url;
export const _WS_SERVER_URL = config.mode === 'dev' ? config._dev_socket_url : config._prod_socket_url;
export const _STORAGE_PREFIX = `__${loadedConfig.storage_prefix}__`;
export const _offline_mode_ = loadedConfig.offline;
