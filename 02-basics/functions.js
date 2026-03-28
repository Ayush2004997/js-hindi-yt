function hello(){
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
}
hello();
function sum(num1,num2){
    return num1+num2;

}
const result=sum(2,"2");
// console.log("result is" , result)
function loginusers(username="ritik"){
    if(username===undefined){
        console.log("please enter user name")
        return;
    }
    return `${username} just become millionaire`
}
console.log(loginusers("Ayush"))
function cart(...num){
    return num;
}
console.log(cart(100,200,399,44))
const user={
    username:"Ayush",
    password:12345
}
function handleobject(anyobject){
    console.log(`${anyobject.username} is millionaire  and ${anyobject.password} is password`);
}
handleobject(user)

const arr=[100,200,300,400,500];
function findarr(newindex){
    return newindex[3]
}
console.log(findarr(arr))