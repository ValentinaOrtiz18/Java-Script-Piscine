function concatStr(a,b){
    if (typeof a === 'number') a = String(a);
     if (typeof b === 'number') b = String(b);
     return a + b;
}

/* test 
console.log(concatStr("valen", "tina"));
*/

