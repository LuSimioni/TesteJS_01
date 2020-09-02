
let arrBotoes = [];
const arrAllButtons = document.querySelectorAll('button');

for (let i = 0; i < arrAllButtons.length; i++){
    arrBotoes.push(arrAllButtons[i].innerText);
    arrAllButtons[i].addEventListener('click', function (){
        let b = arrAllButtons[i];
        console.log(b.innerText);
    })
}

console.log(arrBotoes);