let button = document.querySelector("button"); 
let close = document.querySelector(".close"); 
function changeButtonStyle() { button.style.backgroundColor = "blue"; 
    button.style.color = "yellow"; 
} function openImage() { let image = document.querySelector(".img"); 
    image.style.display = "block"; 
    close.style.display = "block"; 
    button.style.display = "none"; 
} function closeImage() 
{ let image = document.querySelector(".img"); 
    image.style.display = "none"; 
    close.style.display = "none"; 
    button.style.display = "block"; 
} button.addEventListener("click", () => { changeButtonStyle(); 
openImage(); }); close.addEventListener("click", closeImage);
