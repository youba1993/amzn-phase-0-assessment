// 1. Write your functions here

const katzDeli = [];
function takeANumber(arr, name){
    arr.push(name)                 //add a new name to the end of the array 
    console.log( `Welcome, ${name}. You are number ${arr.length} in line.`); 
}
takeANumber(katzDeli, "ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
takeANumber(katzDeli, "youba")
takeANumber(katzDeli, "fouzia")
console.log(katzDeli)  

function line(arr){
    const lineKey = []      //push the element and there index to an array and output the result 
    arr.forEach(element => { lineKey.push(`${arr.indexOf(element)+1}. ${element} ` )})
    
     console.log(` The line is currently : ${lineKey}` )
      
        
}
line(katzDeli)
function nowServing(arr){        
        console.log(`Currently serving ${arr[0]}.`)
        arr.shift()     //delete the first element after serving
}
nowServing(katzDeli)
line(katzDeli)
takeANumber(katzDeli, "Matz")
line(katzDeli)
nowServing(katzDeli)
line(katzDeli)

// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"