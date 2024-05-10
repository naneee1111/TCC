const imgs = document.getElementById("img1");
const img = document.querySelectorAll("#img1 img");

let idx = 0;

function slider1(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx *  500}px)`;
}

setInterval(slider1, 2000);