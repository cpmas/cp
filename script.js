
let wheel = document.querySelector('.wheel');
let value = 0;

function spin() {

    let totalSections = 8;
    let randomSpins = Math.floor(Math.random() * 5 + 5) * 360; 
    let anglePerSection = 360 / totalSections;
    let targetIndex = 0;
    let targetAngle = 360 - targetIndex * anglePerSection;

    value = randomSpins + targetAngle;
    wheel.style.transform = "rotate(" + value + "deg)";
}