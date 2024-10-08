const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")
console.log("Hello", name, "! Welcome to our game!")

const shouldWePlay = prompt("Do you want to play? ")

if (shouldWePlay.toLowerCase() === "yes") {
    const leftOrRight = prompt("You enter a maze, do you want to go right or left? ")
    if (leftOrRight.toLowerCase() === "left") {
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross the bridge? ")
        if (cross.toLowerCase() === "yes") {
            console.log("Bridge was weak and you fell...")
        }
        else {
            console.log("Hurrah! You win...")
        }
    }
    else if (leftOrRight.toLowerCase() === "right") {
        console.log("You go right and eaten by Lion...")
    }
} 
else if (shouldWePlay.toLowerCase() === "no") {
    console.log("Okay :(")
}
else {
    console.log("Invalid input...")
}