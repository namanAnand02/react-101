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
// step1 : write html code using jsx 
const newElement = <h1> hello from naman</h1>
// step2: first select the root element from the html inside which we will add this new element. - give that root access to reactDOM - using reactDOM.createRoot(document.getElementById("root"))
const ReactRoot2 = ReactDOM.createRoot(document.getElementById("root2"))
// step 3: render that new element into that root element we selected 
ReactRoot2.render(newElement)

 
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