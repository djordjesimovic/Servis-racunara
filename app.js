var i = 0;
var images = [];
var time = 3000;
var slidebtn1 = document.querySelector(".slide-btn1");
var slidebtn2 = document.querySelector(".slide-btn2");

var radio = document.querySelectorAll("input");

var btn = document.querySelectorAll("manual-btn");


images[0] = "https://www.sampro.rs/images/thumbs/0010023.jpeg";
images[1] = "https://www.sampro.rs/images/thumbs/0010018.jpeg";
images[2] = "https://www.sampro.rs/images/thumbs/0009833.jpeg";
images[3] = "https://www.sampro.rs/images/thumbs/0009796.jpeg";
images[4] = "https://www.sampro.rs/images/thumbs/0009658.jpeg";


// slidebtn1.addEventListener("click", nazad);
// slidebtn2.addEventListener("click", napred);


radio[0].addEventListener("click", r1Function);
radio[1].addEventListener("click", r1Function);
radio[2].addEventListener("click", r1Function);
radio[3].addEventListener("click", r1Function);
radio[4].addEventListener("click", r1Function);



function changeImage(){
    document.slide.src = images[i];
    radio[i].checked = true;
    if(i < 4){
        i++;
        radio[i].checked = true;
    }
    else if(i == 4){
        radio[i + 1].checked = true;
        i = 0;
        radio[i].checked = true; 
    }
    
    setTimeout("changeImage()", time);
}

function r1Function(){
    if (radio[0].checked = true){
        document.slide.src = images[0];
        console.log("kkk");
    }
    else if (radio[1].checked = true){
        document.slide.src = images[1];
    }
    else if (radio[2].checked = true){
        document.slide.src = images[2];
    }
    else if (radio[3].checked = true){
        document.slide.src = images[3];
    }
    else if (radio[4].checked = true){
        document.slide.src = images[4];
    }
}


// function napred(){
//     document.slide.src = images[i];
//     i+=1;
//     radio[i].checked = true;
//     if(i==5){
//         i = 0;
//     }
// }

// function nazad(){
//     document.slide.src = images[i];
//     i-=1;
//     radio[i].checked = true;
//     if(i==0){
//         i = 5;
//         radio[i].checked = true;
//     }
// }



window.onload = changeImage;