function addTwoNumbers(number1,number2) {
   let result =number1+number2
   return result
  

}
const res=addTwoNumbers(3,7)
//console.log("result: " + res);

function logInUserMessage(username) {
    if (username === undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
    
}
   // console.log(logInUserMessage());       

function calculateCartPrice(...num1) {
    return  num1;
}
console.log(calculateCartPrice(200,400,500));