
// this method allows a string to be split by spaces and returns an array of the substrings. 
// For more information and examples visit: https://devdocs.io/javascript/global_objects/string/split
function words(str){
     return str.split(" ");

};
//thi mmethod takes an array of strings and joins them with spaces to return a single string: Syntax >
// join()
// join(separator) as shown below 

function sentence(arr){
    return arr.join(" ");
};


// this method takes a string and returns it in upper case

function yell(str){
    return str.toUpperCase();


};


// this method takes a  string and returns it in lower case, surrounded by * or any other components 

function whisper(str){
    return '*' + str.toLowerCase() + '*';
};


// this method takes a string and transforms it so that the first character "str[0]." is upper case, and the subsequent characters are lower case.
// slice method extracts a section of the string and returns a new string. Syntax >
//.slice(indexStart)
//.slice(indexStart, indexEnd) > 

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();


}