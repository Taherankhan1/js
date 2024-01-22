const user={
    username:"taherankhan",
    price:999,
 
    welcomemsg: function () {
        console.log(`${this.username},welcome to website`);
        console.log(this );
    }
  

}

// user.welcomemsg()
// user.username ="sam"
// user.welcomemsg()

//console.log(this);

// function chai() {
//     let username="taherankhan"
//         console.log(this.username);
// }
// chai()


// const chai= () => {
// let username="taheran"
// console.log(this);      
// }

// chai(  )


//  const addTwo=(num1, num2) => {

//     return num1+num2
// }

const addTwo=(num1, num2) => (num1+num2)
console.log(addTwo(3,5));