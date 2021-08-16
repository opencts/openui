import log from "../console/log";

export default class WSResponse {
    /**
     * @param {string} route Current route
     * @param {string} method POST or DELETE
     */
    constructor(route, method) {
        this.route = route;
        this.method = method;
    }

    /**
     * Provide the appropriate HTTP response object after a request
     * @param {object} socket The client socket
     * @param {number} status Response status code
     * @param {string} message Response message text
     * @param {object} data Response content object
     */
    json(socket, status = 200, data = null, message = 'ok') {

        if (status > 300) {
            log.error(`[WS:${this.method.toUpperCase()}] /${this.route} : ${message}`, status);
        } else {
            log.info(`[WS:${this.method.toUpperCase()}] /${this.route} : Data sent with success`, status);
        }

        return socket.send(JSON.stringify({
            status,
            message,
            data
        }));
    }

    /**
     * Provide the appropriate WS response object after a request 
     * @param {object} wsInfo General app socket
     * @param {number} status Response status code
     * @param {string} message Response message text
     * @param {object} data Response content object
     */
    static jsonBroadCast(wsInfo, status = 200, data = null, message = 'ok', route = '', method = 'GET') {
        this.method = method;
        wsInfo.clients.forEach(client => {
            const response = new WSResponse(route, method);
            response.json(client, status, data, message);
        });
    }
}
