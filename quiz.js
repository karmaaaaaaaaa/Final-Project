let questions = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bad', 'fish'],
    correctAnswer: 1
};

function showQuestion(q){


let titleDiv = document.getElementById('title');

titleDiv.textContent = question.title;

let alts = document.querySelectorAll('.alternative');

alts.forEach(function(element, index){
element.textContent = q.alternatives[index];

element/addEventListener('click', function(){
    if(q.correctAnswer==index){
        console.log('correct Answer!');
    }
    else{
        console.log('wrong Answer!');
    }
});
});

}
showQuestion(question);
 let btn = document.createElement('btn');
 btn.addEventListener('click', function(){
 console.log('Clicked!');
 });