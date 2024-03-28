function deepCopyObj(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (obj instanceof Array) {
        const copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopyObj(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Object) {
        const copy = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopyObj(obj[key]);
            }
        }
        return copy;
    }
}
