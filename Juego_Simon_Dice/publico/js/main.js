const round = document.getElementById('round');
const simonButtons = document.getElementById('square');
const startButton = document.getElementById('startButton');

class Simon {
    constructor(simonButtons, startButton, round){
        this.round = 0;
        this.userPosition = 0;
        this.totalRounds = 10;
        this.sequence = [];
        this.speed = 1000;
        this.blockedButtons = true;
        this.buttons = Array.from(simonButtons);
        this.display = {
            startButton,
            round
        }
        this.errorSound = new Audio('./publico/sounds/error.wav');
        this.buttonSounds = [
            new Audio('./publico/sounds/1.mp3'),
            new Audio('./publico/sounds/2.mp3'),
            new Audio('./publico/sounds/3.mp3'),
            new Audio('./publico/sounds/4.mp3'),
        ]
    }

    init(){
        this.display.startButton.onclick = () => this.startGame();
    }

    startGame(){
        this.display.startButton.disabled = true;
        this.updateRound(0);
        this.userPosition = 0;
        this.sequence = this.createSequence();
        this.buttons.forEach((element, i) => {
            element.classList.remove('winner');
            element.onclick = () => this.buttonClick(i);
        });
        this.showSequence();
    }

    updateRound(value){
        this.roundd = value;
        this.display.round.textContent = `Round ${this.round}`;
    }

    createSequence(){
        return Array.from({length: this.totalRounds}, () => this.getRandomColor());
    }

    getRandomColor(){
        return Math.floor(Math.random() * 4);
    }

    buttonClick(value) {
        !this.blockedButtons && this.validateChosenColor(value);
    }

    validateChosenColor(value){
        if(this.sequence[this.userPosition] === value){
            this.buttonSounds[value].play();
            if(this.round === this.userPosition){
                this.updateRound(this.round + 1);
                this.speed /= 1.02;
                this.isGameOver();
            }else{
                this.userPosition++;
            }
        }else{
            this.gameLost();
        }
    }

    isGameOver(){
        if(this.round === this.totalRounds){
            this.gameWon();
        }else{
            this.userPosition = 0;
            this.showSequence();
        }
    }
}