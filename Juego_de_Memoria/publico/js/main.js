class Memorama {
    constructor(){
        this.canPlay = false;

        this.card1 = null;
        this.card2 = null;

        this.availableImages = [16, 7, 102, 103];
        this.orderForThisRound = [];
        this.cards = Array.from(document.querySelectorAll(".board-game figure"));

        this.maxPairNumber = this.availableImages.length;

        this.startGame();
    }

    startGame(){
        this.foundPairs = 0;
        this.setNewOrder();
        this.setImagesInCards();
        this.openCards();
    }

    setNewOrder(){
        this.orderForThisRound = this.availableImages.concat(this.availableImages);
        this.orderForThisRound.sort( () => Math.random() - 0.5 );
    }

    setImagesInCards() {
        for (const key in this.cards) {  
            const card = this.cards[key];
            const image = this.orderForThisRound[key];
            const imgLabel = card.children[1].children[0];

            card.dataset.image = image;
            imgLabel.src = `https://randomfox.ca/images/${image}.jpg`;
        }
    }

    openCards() {
        this.cards.forEach(card => card.classList.add("opened"));
        setTimeout(() => {
            this.closeCards();
        }, 10000);
    }

    closeCards() {
        this.cards.forEach(card => card.classList.remove("opened"));
        this.addClickEvents();
        this.canPlay = true;
    }

    addClickEvents() {
        this.cards.forEach(_this => _this.addEventListener("click", this.flipCard.bind(this)));
    }

    removeClickEvents() {
        this.cards.forEach(_this => _this.removeEventListener("click", this.flipCard));
    }

    flipCard(e) {
        const clickedCard = e.target;
        if (this.canPlay && !clickedCard.classList.contains("opened")) { 
            clickedCard.classList.add("opened");
            this.checkPair( clickedCard.dataset.image );
        }
    }

    checkPair(image) {
        if (!this.card1) this.card1 = image;
        else this.card2 = image;
        if (this.card1 && this.card2) { 
            if (this.card1 == this.card2) {
                this.canPlay = false;
                setTimeout(this.checkIfWon.bind(this), 300)  
            }
            else {
                this.canPlay = false;
                setTimeout(this.resetOpenedCards.bind(this), 800)
            }
        }
    }

}