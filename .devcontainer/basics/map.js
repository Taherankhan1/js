// // const myNums=[1,2,3,4,5,6,7,8,9,10]

// // //const newnums = myNums.map( (num) => num +10)
 
// // const newnums=myNums
// //                     .map ( (num)=> num*10 )
// //                     .map( (num) => num +1)
// //                     .filter( (num)=> num >=40)   

// // console.log(newnums);


// const myNums =[1,2,3]

// // const mytotal= myNums.reduce( function (acc,currval) {
// //     console.log(`acc:${acc} and currval: ${currval}`);
// //     return acc+currval
    
// // }, 0)

// const mytotal = myNums.reduce( (acc,curr)=>acc+curr, 0)
// console.log(mytotal);


const shoppingcart = [
    {
        itemname: "js",
        price:2000
    },
    {
        itemname: "java",
        price:1000
    },
    {
        itemname: "python",
        price:3000
    }
]

const pricetopay =shoppingcart.reduce( (acc ,item)=> acc +item.price,0)

console.log(pricetopay);