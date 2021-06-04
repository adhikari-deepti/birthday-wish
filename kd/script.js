let main = document.getElementById('main');
let cube = document.getElementById('cube');

let deg = 2;
let con = 0;
let per = 1200;

let rotateCube = (event) =>{
    var x = event.keyCode;
    if (x == 39) {
        if (con < 30) {
            cube.style.transform = `perspective(${per}px) translateZ(-400px) rotateY(${con * deg}deg)`;
            con++;
        }
    }
    if (x == 37) {
        if (con > -30) {
            cube.style.transform = `perspective(${per}px) translateZ(-400px) rotateY(${con * deg}deg)`;
            con--;
        }
    }
    if (x == 38) {
        if (per < 2000) {
            cube.style.transform = `perspective(${per}px) translateZ(-400px) rotateY(${con * deg}deg)`;
            per = per + 50;
            main.style.transform = "scale(1.1)";
        }
    }
    if (x == 40) {
        if (per >= 1200) {
            cube.style.transform = `perspective(${per}px) translateZ(-400px) rotateY(${con * deg}deg)`;
            per = per - 50;
            main.style.transform = "scale(1)";
        }
    }
    if (con > -20 && con < 20) { main.style.backgroundImage = "url('https://github.com/ricardoolivaalonso/recursos/blob/master/arrow/back.jpg?raw=true')"; }
    if (con < -20 ) { main.style.backgroundImage = "url('https://github.com/ricardoolivaalonso/recursos/blob/master/arrow/left.jpg?raw=true')"; }
    if (con > 20 ) { main.style.backgroundImage = "url('https://github.com/ricardoolivaalonso/recursos/blob/master/arrow/right.jpg?raw=true')";}
}

window.addEventListener("keydown", rotateCube);