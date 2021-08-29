var radio1 = document.getElementById("radio-izd1");
var radio2 = document.getElementById("radio-izd2");
var radio3 = document.getElementById("radio-izd3");
var radio4 = document.getElementById("radio-izd4");
var izdvajamoSlide = document.getElementsByClassName(".first");
var i = 0;


radio1.addEventListener("click", pomeranjeSlajdova);

function pomeranjeSlajdova(){
    if(radio1.checked = true){
        izdvajamoSlide.classList.add("pomeraj");
        console.log("kkk");
    }
}