export function capitalize(value) {
    return value[0].toUpperCase() + value.substr(1);
}


function generateFakeWord(n) {
    const v = "aieyou";
    const c = "bcdfghjklmnpqrstvwxz";
    let word = "";

    for (let i = 0; i < n; i++) {
        word = word + (i % 2 === 0 ? c[Math.trunc(Math.random() * c.length)] : v[Math.trunc(Math.random() * v.length)]);
    }
    return word;
}

export function generateFakeData(m) {
    const data = [];
    for (let i = 0; i < m; i++) {
        const obj = {
            id: (i+1),
            name: generateFakeWord(Math.ceil(Math.random() * 10 + 5)),
            age: Math.trunc(Math.random() * 100),
            date: reformatDate(Math.ceil(Math.random() * 28) + '/' + Math.ceil(Math.random() * 12) + '/' + Math.ceil(Math.random() * 21 + 2000)),
            isMan: [true, false][Math.floor(Math.random() * 2)]
        }
        data.push(obj);
    }
    return data;
}

export function deepCopie(value) {
    return JSON.parse(JSON.stringify(value));
}

export function reformatDate(date) {
    const [d, m, y] = date.split(/[/-]/);
    const td = Number(d) < 10 ? ('0' + d) : d;
    const tm = Number(m) < 10 ? ('0' + m) : m;
    return td + '/' + tm + '/' + y;
}

export function reformatData(data) {
    return data.map(it => {
        for (const attr in it) {
            if (typeof it[attr] === 'boolean') {
                it[attr] = it[attr] ? 'Yes' : 'No'
            }
        }
        return it;
    });
}

export function generateUniqueKey(item) {
    return item + '.' + Date.now().toString(16);
}