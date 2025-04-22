// ~~~~~~~~~~~ deploy on netlify and JSX ~~~~~~~~~~~~~

// npx parcel index.html - parcel hosts this at some server, we can visit that and see 
// npx parcel build index.html - parcel bundler optimises the code, and returns us the bundle into a folder dist n
// dist - one html file, one js file and one map file 
// when we host our project on netlify, we only add this dist folder at netlify.




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




import React from "react"
import ReactDOM from "react-dom/client"


// const element1 = React.createElement("h1", {key: "1", id: "one", className:"class-one", style:{fontSize:"30px", color:"white", backgroundColor:"blue"}}, "hello element2")
// const element2 = React.createElement("h1", {key:"2", id: "two", className:"class-two", style:{fontSize:"30px", color:"white", backgroundColor:"black"}}, "hello element2")

// const div1 = React.createElement("div", {}, [element1, element2])

// const Reactroot = ReactDOM.createRoot(document.getElementById("root1"))


// Reactroot.render(div1)

// React will completely replace everything inside #root in index.html file, including the <h3> you wrote manually - and replace it with whatever you're rendering from React 


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// JSX - javascript XML 


// using JSX - we can now directly add html codes into our codebase.

// // ->  step1 : write html code using jsx 
// const newElement = <h1> hello from naman</h1>

// // ->  step2: first select the root element from the html inside which we will add this new element. - give that root access to reactDOM - using reactDOM.createRoot(document.getElementById("root"))
// const ReactRoot2 = ReactDOM.createRoot(document.getElementById("root2"))

// // ->  step 3: render that new element into that root element we selected 
// ReactRoot2.render(newElement)

 
//                      React                           render 
// React.createElement() ----> react element (Js object) -----> HTML element 


// Note: react/js doesn't understand JSX code. 
// Dont tell the interviewer jsx is part of react,No. it is a separate thingy that was introdiduced way later which only makes our life easier as we can now write direct html type code inside js.


// Babel is another dependency that comes with bundler like parcel which converts jsx code into react code. and the rest of the story continues. 



//          babel                           react                           render
// JSX ==========> React.createElement() =======> react element(js object) ======> Html element 


//                             babel
// <h1> hello from naman</h1> =====> React.createElement("h1", {}, "hello from naman") 






// JSX stands for JavaScript XML.

// It’s a syntax extension for JavaScript used with React to describe what the UI should look like. It allows you to write HTML-like code inside JavaScript — which React then transforms into real DOM elements.

// JSX is just syntactic sugar — it makes writing UI components much easier and more readable.




// Babel is a JavaScript compiler (also called a transpiler).
// Converts JSX → React.createElement() calls.
// Helps tools like Parcel, Vite, or Webpack understand JSX and ES6 code ---- So browsers (which don’t understand JSX) can run it.

// If you try to use JSX without Babel (or a bundler using Babel internally), you’ll get syntax errors, because browsers don’t understand JSX out of the box.





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Now on, we wil only use jsx and not react.createElement()


// next learning - how to add multiple elements inside jsx 

// how JSX handles multiple sibling elements??
// -------->  JSX expressions must have one parent element — just like HTML needs everything inside a single root.



// ---> use brackets which only helps others understand - not necessary 
// ---> we cant directly send multiple elements to render - throws error- render expects one element. 
// ---> so wrap them together inside a div or Or use React Fragment to avoid adding an actual extra DOM node (even empty <></>)  




// ---> <></> is called react fragment - used to avoid adding an actual extra DOM mode. 

// JSX needs one parent element because:
// ------> When Babel transpiles JSX, it expects a single React.createElement call at the top level.
// ------> Multiple top-level elements break that expectation.







// const newElement = (

//     <div>
//         <h1 id="first" className="firstclass" style={{color: "white", backgroundColor: "black"}}> hello from naman</h1>
//         <h2> Jsx - adding multiple elems </h2>
//     </div>
    
//     // OR 


//     // <>
//     //     <h1> hello from naman</h1>
//     //     <h2> Jsx - adding multiple elems </h2>
//     // </>



//     // either wrap them around a new div element 
//     // or use react fragment -> <></> when we dont want to use extra div element.

//     // when we create single parent inside newElement, no prpb
//     // when we create siblings, we have to wrap them inside div or react fragment.

//     // brackets around them only enhances the readability of the code. 


// )
// const ReactRoot2 = ReactDOM.createRoot(document.getElementById("root2"))

// ReactRoot2.render(newElement)


// next thing, we want to use mutliple elements 



// WE CAN ALSO ADD ID, CLASS, ETC INTO THE ELEMENTS 

// NOTE : 

// <h1 id="first" className="firstclass" style={{color: "white", backgroundColor: "black"}}> hello from naman</h1>

//  must wrap the styles inside a single object.

// JSX expects style to be a JavaScript object, and you need double curly braces:

// -----> The outer {} is for embedding JavaScript into JSX.

// -----> The inner {} is the actual object with style properties.




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~ Imp stuffs related to JSX ~~~~~~~~~~~~~




// JS objects defined outside, to use them inside jsx, we can put them inside curly braces.  
const names = "raman"

// we can also use objects desc inside of jsx using the curly braces 

const obj = {
    age: 23,
    salary: 50000
}


const styleObj = {
    color: "white", 
    backgroundColor: "blue"
}

const newElement = (
    // 1. add mutliple elems - wrap them around div or react fragment 

    // 2. we can add id, className to new element child 

    // 3. javascript expressions - use them inside curly braces. 

    // 4. to add styles to the element - we have two ways - separate style.css file - or directly here using two curly braces 
    // 5. to add inline styles , we use two curly braces and add all of the style attributes then and there -- or define the style object outside of the jsx and then just tap it here inside {} just like we do with other js expresions.

    // 6. to send int value directly inside of jsx, we can use them inside of {23}
    


    <div>
        <h1 id="first" className="firstclass" > hello from {names}</h1>
        <h2 style = {styleObj} > learning react with {names} whose age is {obj.age} and is earning {obj.salary} </h2>
    </div>
    
    // OR 


    // <>
    //     <h1> hello from naman</h1>
    //     <h2> Jsx - adding multiple elems </h2>
    // </>





)
const ReactRoot2 = ReactDOM.createRoot(document.getElementById("root2"))

// ReactRoot2.render(newElement)





// ~~~~~~~~~~~ lets learn about components in REACT ~~~~~~~~~~~~~~



// React components are defined in two ways - 
// ---> 1. class based components : no longer used 
// ---> 2. Function based components : used today 



// creating a react component which returns a jsx 
function greet(){
    return <h1> This is react component.</h1>
}


const newElement6 = greet()


const Reactroot3 = ReactDOM.createRoot(document.getElementById("root3"))
// now we can render this newElement6 on the page 

// Reactroot3.render(newElement6)


// we can also define function based component using arrow function 
const meet = ()=>{
    return <h2> React component</h2>
}

const newElement7 = meet()

// render it into root3 

// Reactroot3.render(newElement7)

// or we can directly call this function inside this render thingy 

// Reactroot3.render(meet())



// How do we add multiple react elements inside render thingy here 

// say we want to render newElement6 and newElement7 together inside the render - how do we do that?


// we can wrap them inside react fragment - <></> 


Reactroot3.render(<>{greet()} {meet()}</>)

// rem we are inserting js exprs (react component) inside of <></>, jsx hai ye --- hence we need to use {} to embed those js exprss
