import React from "react"
import ReactDOM from "react-dom/client"


const element1 = <h1 style={{backgroundColor: "pink", color:"red"}} >Hello from react</h1>


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(greet("Naman"))



// function greet(name){
//     return <h2> Hello world, {name}</h2>
// }



// JSX has a rule that all the user defined function should start with capital letter.
// this is not a react rul but jsx 
// <div> <h1>, etc all these pre defined tags starts with small letter. 
// so in order to differentiate the user defined functions from pre defined, there comes this rule.
// these user defined rules should be self closing ones 


/*

function Greet(name){
    return <h2> Hello world, {name}</h2>
}

 ## - this is wrong way 
 name is here understood as object and we cant just send object inside jsx {}
 
 

const newElement = <Greet name= "naman" />
root.render(newElement)
*/



// Below is the right way 


function Greet(props){
    return <h2> Hello world, {props.name}, {props.age} years old, earning {props.salary} rupees per month.</h2>
}


// const newElement = <Greet name= "naman" />
const newElement = <Greet name= "naman" age= "23" salary = "50000" />


root.render(newElement)






/* 
~~~~~~~~~~~~~~~~ explanations ~~~~~~~~~~~~~~~~~~~~~~~


- these arguments gets stored inside props as key value pair 
- props is an object which stores those info in the form of key-value

props = {
    name: "naman", 
    age: "23",
    salary : "50000"
}

therefore, it can be used inside function calls using dot - and dont forget to use {} to embed them. 


*/




// <Greet/> :- function call 


/*

- props : an object 

the ques was how do we send multiple arguments in jsx function calls 

- html format - <h1 id= "first" class = "firstName"> hello world</h1>
- jSX also copied this idea - to sendmultiple arguments this way 

<Greet nam= "naman" age= "23" salary = "50000" /> ----> JSX format 

- and it gets stored as key value pair inside props object 
- props is an object - it is what passed inside react component. 



*/







