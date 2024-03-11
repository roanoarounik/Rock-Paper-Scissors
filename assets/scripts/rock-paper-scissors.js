let wins = 0;
let draws = 0;
let losses = 0;
let computerWins = 0;
let computerLosses = 0;

let gameMessage = `Choose a button to play`;
const updateGameMessage = () => $(`.gameMessage`).each(function() { $(this).html(gameMessage) });

let choices = {
    Rock: {
        label: `Rock`,
        beats: `Scissors`,
    },
    Paper: {
        label: `Paper`,
        beats: `Rock`,
    },
    Scissors: {
        label: `Scissors`,
        beats: `Paper`,
    },
}

$(`.choiceButton`).each(function() {
    $(this).on(`click`, onClickEvent => {
        if ($(this).hasClass(`userChoiceButton`)) {
            let usersChoice = onClickEvent?.target?.innerHTML;
            console.log(`User picked`, usersChoice);

            let computerChoices = Object.keys(choices);
            let randomChoice = Math.floor(Math.random() * computerChoices.length);
            let computerChoice = choices[computerChoices[randomChoice]];

            console.log(`Computer picked`, computerChoice?.label);

            gameMessage = `You chose ${usersChoice}, Computer chose ${computerChoice?.label}`;
            
            if (usersChoice == computerChoice?.label) {
                gameMessage = `It's A Draw! --- ` + gameMessage + ` --- It's A Draw!`;
                draws = draws + 1;
            } else if (choices[usersChoice].beats == computerChoice?.label) {
                gameMessage = `You Win! --- ` + gameMessage + ` --- You Win!`;
                wins = wins + 1;
            } else {
                gameMessage = `You Lose! --- ` + gameMessage + ` --- You Lose!`;
                losses = losses + 1;
            }

            updateGameMessage();
        }
    })
})

updateGameMessage();