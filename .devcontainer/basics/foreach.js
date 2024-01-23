const coding = ["java","cpp","python","php"]

// coding.forEach(item => {
//     console.log(item);
// });

// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme);


// coding.forEach( (item, index,arr)=>{
// console.log(item ,index ,arr);
// } )


const myCoding = [
    {
        name:"javascript",
        file:"js"
    },
    {
        name:"java",
        file:"java"
    },
    {   
        name:"python",
         file:"py"
    }
]
myCoding.forEach( (item) => {
console.log(item.name);
console.log(item.file);
})
