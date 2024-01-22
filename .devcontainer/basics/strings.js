const name ="taherankhan"
const age=50

//console.log(name + age + "value");  //outdated 

// in modern programming  
console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String ('taheran')

console.log(gameName[0]);
console.log(gameName.__proto__);

//console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('a'));
 
// const newgamename=gameName.substring(0,7)

// console.log(newgamename);
// const anotherstring = gameName.slice(-7,3)
// console.log(anotherstring);

// const newstringOne="  taheran  "
// console.log(newstringOne);
// console.log(newstringOne.trim());

const url ="https://taheran.com/pathan%20taherankhan"
console.log(url.replace('%20','-'));
 