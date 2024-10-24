var navlink1=document.querySelector(".navlink1");
function opennav(){
    navlink1.style.left="0";
}
function closenav(){
    navlink1.style.left="-60%";
}
const heartIcons = document.querySelectorAll('#heart');

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener('click', function() {
        heartIcon.classList.toggle('fas');  // Add solid heart class
        heartIcon.classList.toggle('far');  // Remove outline heart class
        heartIcon.classList.toggle('red');  // Change color to red
    });
});
