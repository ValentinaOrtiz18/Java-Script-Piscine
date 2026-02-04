const escapeStr = '`, \\, /, ", \''

const arr = [4, '2'];
Object.freeze(arr);

const obj = { str: "Valentina", num: 23, bool: true, undef: undefined};
Object.freeze(obj);

const nested = {
    arr: [4, undefined, '2'],
    obj: { 
        str: 'Valentina',
        num: 23,
        bool: false
    }
};
Object.freeze(nested);



