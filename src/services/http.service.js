async function get(url) {
    return await fetch(url).then(r => r.json());
}

async function post(url, data) {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

async function put(url, id, data) {
    const route = url.endsWith('/') ? (url + id) : (url + '/' + id);
    return await fetch(route, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(r => r.json());
}

async function remove(url, id) {
    const route = url.endsWith('/') ? (url + id) : (url + '/' + id);
    return await fetch(route, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r.json());
}

export const http = {
    get,
    post,
    put,
    delete: remove
};
