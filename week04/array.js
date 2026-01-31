let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

//1
const namesB = names.filter(name => name.startsWith("B"));
console.log(namesB);

//2
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//3
const averageStringLength = names.reduce((sum, name) => sum +name.length, 0) / names.length;