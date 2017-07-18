var cards = [

{
  rank:'queen',
  suit: 'hearts',
  cardImage:'images/queen-of-hearts.png'
},

{
  rank:'queen',
  suit: 'diamonds',
  cardImage:'images/queen-of-diamonds.png'
},
{
  rank:'king',
  suit: 'hearts',
  cardImage:'images/king-of-hearts.png'
},
{
  rank:'king',
  suit: 'diamonds',
  cardImage:'images/king-of-hearts.png'
}
];
var cardsInPlay=[];
var checkForMatch = function() {
if (cardsInPlay.length===2) {
    if (cardsInPlay[0]===cardsInPlay[1]){
     alert("you found a match");
    }else{
    alert("sorry, try again!");
   }
  }

}


var flipCard = function(){
  // used getAttribute method to get the data-id attribute of the card
  // that used for clicked and store in variable
var cardId = this.getAttribute('data-id');
// used push method to push into the cards
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
//used setAttribute method to update the src attribute to the image
// that also for clicked and for cardimage property
this.setAttribute('src', cards[cardId].cardImage);


  checkForMatch();

}

//flipCard(0);
//flipCard(2);
// created a new function createBoard
var createBoard = function(){
  // within the createBoard function used for loop
  for (var i=0; i<cards.length; i++) {
    // then created img elemnt and stored in variable cardElement
    var cardElement = document.createElement("img");
    //then used set attribute method to add a src attribute for the element
    cardElement.setAttribute('src', 'images/back.png');
    // again followed the same attribute rules for the data-id
    cardElement.setAttribute('data-id', i);
    // then addEventListener method to add a click event
    cardElement.addEventListener('click', flipCard);
    // finnaly used appendChild method to append the current cardElement
    // to the game board where id of game-board
    document.getElementById('game-board').appendChild(cardElement);

  }

};
// called the createBoard function
createBoard();




