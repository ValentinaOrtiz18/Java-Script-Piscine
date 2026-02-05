const person = {
    age: 10,
    country: 'colombia'
};

const clone1 = { ...person };
const clone2 = { ...person};

const samePerson = person;

person.age += 1;
person.country = 'FR';

