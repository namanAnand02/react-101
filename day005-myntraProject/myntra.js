import React from "react"
import ReactDOM from "react-dom/client"


// const element = <h1>Hello world</h1>


// // using destructuring of props 
// function Greet({tech1, tech2}){
//     return <p>lets jump on this ship to sail {tech1} and {tech2}</p>
// }

// const element2 = <Greet tech1 = "jsx" tech2 = "react" />

// ~~~~~~~~~~~~~~~~~~~~~~~~ Myntra project ~~~~~~~~~~~



// Header 
// Body 
// Footer 




// card component 
function Card(props){
    return (
        <div style={{border:"2px solid black", padding:"2px"}}>
            {/* adding styles in outer div so as to add space between two cards- and ofc we are adding border to it.   */}
            <img src ="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQX8Bg3lK12HG47Fm1_fnVxGsmfXhQ-sXFZarzPQ0Y26MTP_25SETKwkKPOfFuH8scQgQoVK23v222YOd7ZQT1UPR8tAKaiZ6xVd1ZxDrrY " height="200px" width="200px" />

            {/* we pack the rest things in another child div  */}
            <div style={{textAlign:"center"}}>
                {/* textalign:center -> in teeno ko center mein le aayega otherwise they would be normally lying leftmost side */}
                {/* <h2> T-Shirts </h2>
                <h1> 40-80% OFF</h1>
                <h2> Shop Now </h2> */}

                {/* because we are adding js exprs - props.offer etc - so we use {} to embed them in. */}
                <h2> {props.clothType} </h2>
                <h1> {props.offer} </h1>
                <h2> Shop Now </h2>
            </div>
        </div>

    )
}

// this cloth array of objects store info about all the individual cloth cards - now later, we can run a loop to extract the these info one by one - next time, when we need to insert more cards, we can just add their info here in the form of objects.
const clothCardArray = [{clothType:"Pajama" , offer:"50-80% OFF"}, {clothType:"T-shirts" , offer:"20-40% OFF"}, {clothType:"Tees" , offer:"30-50% OFF"}, {clothType:"Shoes" , offer:"10-20% OFF"}, {clothType:"Kurta" , offer:"40-60% OFF"}, {clothType:"Jeans" , offer:"20-30% OFF"} ]



// firstly we introduce a function named APP - which runs all of this. 

// App component 
function App(){
    // this app component helps us run all these header, body and footer. 
    return (
        // ~~~~~~~~~~ Header ~~~~~~~~~~~~~~~~~~ 
        //~~~~~~~~~~~~~~~  Body ~~~~~~~~~~~~~~~~~~~

        // inside body, we have so many cards to generate. 
        // so first, we generate one card
        // one card - image of tshirt -> T-shirts -> 40-80 % off -> Shop now 
        // we define card component at the top of this which will generate one card 
        // now in here, we will wrap multiple cards together inside a div 

        <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
            {/* flex added so as to bring all children into same orientation.  */}
            {/* gap added to bring upon gaps among each card on either side */}
            {/*  flexwrap style is used so that they drop down and do not keep going in a linear line.*/}
            

            {/* every card will have different image, clothtype and offer  */}
            {/* to add them separately, we need to send in arguments while calling these card component- each of the card will have their own arguments - that will have info about theirs. */}
            
            
            {/* <Card clothType="T-Shirts" offer = "20-40% OFF"  />
            <Card clothType="Jeans" offer = "10-20% OFF" />
            <Card clothType="Kurta" offer = "40-80% OFF" />
            <Card clothType="T-Shirts" offer = "50-80% OFF" />
            <Card clothType="Pants" offer = "40-50% OFF" />
            <Card clothType="T-Shirts" offer = "30-60% OFF" />
            <Card clothType="Jeans" offer = "40-60% OFF" />
            <Card clothType="T-Shirts" offer = "40-80% OFF" />
            <Card clothType= "pajama" offer = "10-20% OFF" />
            <Card clothType="T-Shirts" offer = "40-80% OFF"  /> */}


            {/* we cant possibly be entering separate datas about all the cards-  */}
            {/* we can store the info about all the cloth card in an array of objects -- and then use map to bring them one by one  */}
            {/* The Better Way: Array + .map() */}


            {
                // this is where we need to insert js expre- only those who yields some result.
                clothCardArray.map((value, index)=> <Card key = {index} clothType= {value.clothType} offer = {value.offer} />)

                // Map here --> It loops through the clothCardArray and for each object, it returns a Card component with props filled in from that object.
                // it returns somethinglike this - [<card ../> , <card ../>, <card ../>, <card ../>, <card ../>]
                // And JSX lets us embed this list directly into our component
                
                // NOTE: dont use for loop here - it returns nothing 
                // .map() returns an array - so we can use it here

                // Why key={index}?
                // --> we're using .map() on clothCardArray, and we don’t have a unique ID for each item. So index is a safe fallback as long as the list doesn’t change dynamically (like sorting/deleting items). 
                // --> React needs this key to keep track of each Card when rendering the list.


                // in jsx, we can insert any js expr inside {} just that it should return some result.
            }
            


        </div>




        // ~~~~~~~~~~~~~~~~~~~ Footer ~~~~~~~~~~~~~~~~~~~~~~
    )
}










const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)