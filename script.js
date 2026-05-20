// ====================
// NAVBAR EFFECT
// ====================

const nav = document.getElementById("main-nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});


// ====================
// CURSOR EFFECT
// ====================

const cursor=document.createElement("div");

cursor.classList.add("cursor-dot");

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.top=e.clientY+"px";

cursor.style.left=e.clientX+"px";

});


// ====================
// TYPING EFFECT
// ====================

const texts=[
"Web Developer",
"UI/UX Designer",
"Digital Creator"
];

let count=0;
let index=0;

function type(){

if(count===texts.length){

count=0;

}

let currentText=texts[count];

let letter=currentText.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===currentText.length){

count++;

index=0;

setTimeout(type,1000);

}else{

setTimeout(type,80);

}

}

type();


// ====================
// SECTION ANIMATION
// ====================

const sections=document.querySelectorAll(".section");

function revealSection(){

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("show");

}

});

}

window.addEventListener("scroll",revealSection);

revealSection();