const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let xPosition = 20;
let yPosition = 20;
let xVelo = getRandomArbitrary(-5, 5);
let yVelo = getRandomArbitrary(-5,5);

let xPositionC = 50;
let yPositionC = 50;
let xVeloC = getRandomArbitrary(-5, 5);
let yVeloC = getRandomArbitrary(-5,5);

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //cuadrado
    ctx.fillStyle = "blue";
    ctx.fillRect(xPosition, yPosition, -10, -10);

    //circulo
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(xPositionC, yPositionC, 10, 0, 2 * Math.PI);
    ctx.fill();

    if(xPosition + xVelo > canvas.width || xPosition + xVelo < 0) {
        xVelo = -xVelo;
    }

    if(yPosition + yVelo > canvas.height || yPosition + yVelo < 0) {
        yVelo = -yVelo;
    }

    if(xPositionC + xVeloC > canvas.width || xPositionC + xVeloC < 0) {
        xVeloC = -xVeloC;
    }

    if(yPositionC + yVeloC > canvas.height || yPositionC + yVeloC < 0) {
        yVeloC = -yVeloC;
    }

    xPosition += xVelo ;
    yPosition += yVelo ;

    xPositionC += xVeloC ;
    yPositionC += yVeloC ;
    
    window.requestAnimationFrame(draw);
}

function getRandomArbitrary(min, max){
    return Math.random() * (max - min) + min;
}

window.requestAnimationFrame(draw);

