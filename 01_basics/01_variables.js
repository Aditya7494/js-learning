const id = 02
var name = "Aditya"
let company = "Persistent"

{
    var name = "Rohan"
    let company = "Amazon"
}

console.table([id,name,company])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/