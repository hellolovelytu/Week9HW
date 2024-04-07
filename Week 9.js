/* Create properties of card*/
class Card{
    constructor(suit,rank,value){
        this.suit=suit;
        this.rank=rank;
        this.value=value;
    }
}

class Deck{/*Build the deck of 52 cards*/
    constructor(){
        this.deck=[];
        const suits=['Hearts','Diamond','Spades','Clubs'];
        const ranks=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

        for (let i=0; i<suits.length;i++){
            for (let j=0; j<ranks.length;j++){
                this.deck.push(new Card (suits[i],ranks[j],j));
            }
        }
    }
    shuffleDeck(){/*Shuffling method from https://flaviocopes.com/how-to-shuffle-array-javascript/*/
        this.deck=this.deck.sort(()=> Math.random() -0.5);
    }
}

class Player{
    constructor(myDeck){/*Each player has cards and score properties*/
        this.player1Cards=myDeck.deck.slice(0,26);/*Cut the deck from above class in half and deal for each player*/
        this.player2Cards=myDeck.deck.slice(26,52);
        this.player1Score=0;
        this.player2Score=0;
    }
    countingScore(){/*Method to couting scores of each player*/
        for (let x=0; x<this.player1Cards.length;x++)
        if (this.player1Cards[x].value>this.player2Cards[x].value){
            this.player1Score++;
        }else if (this.player2Cards[x].value>this.player1Cards[x].value){
            this.player2Score++;
        }
    }
    displayResults() {/*Method for displaying results into the console*/
        console.log(`Player 1 Score: ${this.player1Score}`);
        console.log(`Player 2 Score: ${this.player2Score}`);
        if (this.player1Score > this.player2Score) {
            console.log("Player 1 wins!");
        } else if (this.player1Score < this.player2Score) {
            console.log("Player 2 wins!");
        } else {
            console.log("It's a tie!");
        }
    }
}
let gameDeck= new Deck;
gameDeck.shuffleDeck();/*Access the gameDeck after using shuffling method*/
console.log(gameDeck);

let player=new Player(gameDeck);
console.log(player.player1Cards);/*Access the player1Cards properties in object player*/
console.log(player.player2Cards);/*Access the player2Cards properties in object player*/
player.countingScore();/*Return score of each player using countingScore method from class Player*/
player.displayResults();/*Return the results*/
