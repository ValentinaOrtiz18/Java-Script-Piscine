
       
  /*     
       const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
};
  */

// function that takes a key and returns its corresponding value 
function get(key,sourceObject){
    return sourceObject[key];

}
// Function that takes and key and a value, updates the value for the corresponding property and lastly, returns the value 
 function set(key, value ){
    sourceObject[key] = value;
    return value;
   
};

/*
set('bool', false);
 console.log(get('bool', sourceObject));
*/










