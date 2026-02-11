
 // Function that takes a key and returns its corresponding value from only sourceObject
function get(key){
    return sourceObject[key];

};

// Function that takes a key and a value, updates or adds keys and/or values 
 function set(key, value){
    sourceObject[key] = value;
    return value;
   
};
 
 
// MY VERSION 
 
 /*      
  
       const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
};

       const valentest = {
  age: 23,
  name: 'valentina',
  ciudad: 'londres',
};


// Generic function that takes a key and returns its corresponding value from any obj
function get(key, obj){
    return obj[key];

};

// Generic function that takes a key and a value, updates or adds keys and/or values 
 function set(key, value, obj){
    obj[key] = value;
    return value;
   
};

 
set('funciona', 'tambien', valentest );
console.log(valentest);

*/









