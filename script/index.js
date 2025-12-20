getcomputerchoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

gethumanchoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Invalid choice! Please choose rock, paper, or scissors.');
    }
}

determinewinner = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }
    else {
        return 'Computer wins!';
    }
}

playgame = () => {
    const humanChoice = gethumanchoice(prompt('Enter rock, paper, or scissors:'));
    if (!humanChoice) return; // Exit if invalid choice
    const computerChoice = getcomputerchoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(determinewinner(humanChoice, computerChoice));

}
// playgame();
const button = document.getElementById("playBtn");
const section = document.getElementById("showgame");

button.addEventListener("click", () => {
    if (section.style.display === "none") {
        section.style.display = "flex";
    } else {
        section.style.display = "none";
    }
});
