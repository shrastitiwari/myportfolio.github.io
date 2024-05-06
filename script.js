function functionMenu(){
    div = document.getElementById('menuu');
    div.style.display = "block";
    document.getElementById("m-icon").style.display="none";
    
    document.getElementById("cross").style.display="block";
}
function functionCross(){
    div = document.getElementById('menuu');
    div.style.display = "none";
    document.getElementById("cross").style.display="none";
    document.getElementById("m-icon").style.display="block";
}


let myMediaQuery = window.matchMedia('(max-width: 460px)');
function widthChangeCallback(myMediaQuery) {
    if(myMediaQuery.matches) {
    //   document.querySelector("p").textContent = "I am wider than 599px now.";
    div = document.getElementById('menuu');
    div.style.display = "none";
    document.getElementById("cross").style.display="none";
    document.getElementById("m-icon").style.display="block";
     } else {
    //    document.querySelector("p").textContent = "I am narrower than 599px now.";
    div = document.getElementById('menuu');
    div.style.display = "flex";
    document.getElementById("cross").style.display="none";
    document.getElementById("m-icon").style.display="none";
     }
  }
  myMediaQuery.addEventListener('change', widthChangeCallback);

function skillFunction(){
    div = document.getElementById('sk-content');
    div.style.visibility = "visible";
    document.getElementById("ed-content").style.visibility="hidden";
    
    document.getElementById("ex-content").style.visibility="hidden";
}
function educationFunction(){
    div = document.getElementById('ed-content');
    div.style.visibility = "visible";
    document.getElementById("sk-content").style.visibility="hidden";
    
    document.getElementById("ex-content").style.visibility="hidden";
}
function experianceFunction(){
    div = document.getElementById('ex-content');
    div.style.visibility = "visible";
    document.getElementById("sk-content").style.visibility="hidden";
    
    document.getElementById("ed-content").style.visibility="hidden";
}
function myFunction1(){
    window.open("https://shrastitiwari.github.io/clinic.github.io/");
}
function myFunction2(){
    window.open("https://shrastitiwari.github.io/webpage.github.io/");
}
function myFunction3(){
    window.open("https://shrastitiwari.github.io/hotel.github.io/");
}
