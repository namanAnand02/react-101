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




// ~~~~~~~~~~~~~~~~~~ PROPS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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





/*

// ~~~~~~~~~~~~~ More on PROPS ~~~~~~~~~~~~~~~

- props stands for properties 
- they are used to pass data from a parent component to a child component. 

- REAL WORLD ANALOGY 
-- think of props as arguments to a function or attributes in HTML 

-- <img src="dog.png" alt="a dog" />
-- here src and alt are props for the <img/> tag
-- in react, props works the same way



// an exmaple --> 


function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element = <Welcome name="Naman" />;
ReactDOM.createRoot(document.getElementById("root")).render(element);


// -- We are passing a prop name="Naman" to the Welcome component.

// -- Inside the component, we use props.name to access it.




// WHY PROPS? 
- making components reusable 
- keeping code clean and organized 
- passing dynamic data to components 


// common mistakes with props 

- 1. forgetting to accept props in the function. 

        function Greet() {  // Missing (props)
            return <h1>{props.name}</h1>; // Error!
        }


- 2. Using props without passing it. 

        function Greet(props) {
            return <h1>Hello {props.name}</h1>;
        }

        const elem = <Greet />;  // props.name will be undefined



// solution to above problems 

- - use defualt values or checks 

        function Greet(props) {
            return <h1>Hello {props.name || "Guest"}</h1>; // default values or checks 
        }




// 

// Best practice - Destructuring Props 

// Destructuring props - cleaner syntax 

        function Welcome({ name }) {
            return <h1>Hello, {name}!</h1>;
        }

        <Welcome name="Naman" />


// Destructuring props - passing multiple props 

        function Profile({ name, age }) {
            return (
                    <div>
                        <h1>Name: {name}</h1>
                        <p>Age: {age}</p>
                    </div>
            );
        }

        <Profile name="Naman" age={23} />


*/



