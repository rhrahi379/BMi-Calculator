// BMi Calculator


let height = document.getElementById('height');
let weight = document.getElementById('weight');
let btn = document.getElementById('button');
let body = document.getElementById('bdy');
let bmiName = document.getElementById('spn');
let score = document.getElementById('score');
let health = document.getElementById('healthy');

btn.addEventListener('click', function () {
    let heightV = parseFloat(height.value);
    let weightV = parseFloat(weight.value);
    let mtr = heightV / 100;
    let sqNum = mtr * mtr;
    let bmi = weightV / sqNum;
    score.textContent = bmi.toFixed(2);
    let underCol = '#f6e58d';
    let normalCol = '#badc58';
    let overCol = '#ff7979';
    if (score.textContent < 18.6) {
        body.style.background = underCol;
        bmiName.style.color = underCol;
        btn.style.background = underCol;
        score.style.color = underCol;
        health.innerText = 'You are Under Weight! 18.6 to 24.9 is Normal Range!';
    } else if (score.textContent < 24.9) {
        body.style.background = normalCol;
        bmiName.style.color = normalCol;
        btn.style.background = normalCol;
        score.style.color = normalCol;
        health.innerText = 'You are in Normal Range!';
    } else {
        body.style.background = overCol;
        bmiName.style.color = overCol;
        btn.style.background = overCol;
        score.style.color = overCol;
        health.innerText = 'You are Over Weight! 18.6 to 24.9 is Normal Range!';
    }
})