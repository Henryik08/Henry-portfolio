let mainHam = document.getElementById("hero-ham");
let subHam = document.getElementById("hero-ham2");
let contentMenu = document.getElementById("contentMenu");
mainHam.onclick = function(){
    contentMenu.style.display = "block";
    subHam.style.display = "block";
    mainHam.style.display = "none";
}

subHam.onclick = function(){
    mainHam.style.display = "block";
    subHam.style.display = "none";
    contentMenu.style.display = "none";
}