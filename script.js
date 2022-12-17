const cards = document.querySelectorAll('.card');
let cardOne, cardTwo;
let dis_Deck = false;
let matchedCard = 0;
const timeValue = document.getElementById("time");
const result = document.getElementById("result");
//Initial Time
let seconds = 0,
  minutes = 0;
  timeValue.innerHTML = `<span>Time:</span>00:00`;
  //For timer
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};
  interval = setInterval(function(){
  	seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
  },1000);

function flipCard(e){
	let clickedCard = e.target;
	 if(clickedCard!=cardOne && !dis_Deck){
	 	clickedCard.classList.add('flip');
    
    if(!cardOne){
    	return cardOne = clickedCard;
    }
	cardTwo = clickedCard;
	dis_Deck = true;

	let cardOneImg = cardOne.querySelector('img').src,
	cardTwoImg = cardTwo.querySelector('img').src;
	matchCards(cardOneImg, cardTwoImg);
	 }
}
function matchCards(img1, img2){
	if(img1 == img2){
		matchedCard++;
		if(matchedCard == 10){
			setTimeout(() => {
				return shuffCard();
			}, 1200);
			clearInterval(interval);
			result.innerHTML = `Well done! You win!<3`
			return end();
		}
		cardOne.removeEventListener('click', flipCard);
		cardTwo.removeEventListener('click', flipCard);
		cardOne = cardTwo = '';
		return dis_Deck = false;
	}
	else{
		setTimeout(() => {
          cardOne.classList.add('vibration');
          cardTwo.classList.add('vibration');
		}, 400);
		setTimeout(() => {
          cardOne.classList.remove('vibration', 'flip');
          cardTwo.classList.remove('vibration', 'flip');
          cardOne = cardTwo = '';
          dis_Deck = false;
		}, 1200);
	}
}
function shuffCard(){
matchedCard = 0;
cardOne = cardTwo = '';
/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.sort(() => Math.random() => 0.5 ? 1 : -1);*/
cards.forEach(card => {
	card.classList.remove('flip');
	card.addEventListener('click', flipCard);

/*let imgTag = card.querySelector('img');
	imgTag.src = `pic${array[index]}.jpg`;*/
});
}
function end(){

}
cards.forEach(card => {
	card.addEventListener('click', flipCard);

});