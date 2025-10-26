//List of messages
    const messages = [
        "Keep going!",
        "You got this!" ,
        "Stay strong!",
        "Believe in yourself"
   ];
   
// Function to pick a random message
function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex]; 
}

//Generates and displays a new message
console.log("Your random message is: " + generateRandomMessage());