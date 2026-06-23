function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

function showSecret(){
document.getElementById("secretMessage").innerHTML =
"Just kidding. I love you ❤️";
}

const startDate = new Date("2026-01-23");

const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff/(1000*60*60*24));

document.getElementById("daysCounter").innerHTML =
"Together for " + days + " days ❤️";

document.addEventListener("click", createHeart);

function createHeart(e){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);
}

let count=0;

document.getElementById("hiddenHeart").addEventListener("click",()=>{

count++;

if(count===5){
alert("Every click is a month. I'd click forever if it meant staying with you ❤️");
}
});
