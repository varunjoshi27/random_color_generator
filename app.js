let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("Generate random color");
    let h3=document.querySelector("h3");
    let randomcolor=getrandomColor();
    h3.innerText=randomcolor;

    let div=document.querySelector("div");
   div.style.backgroundColor=randomcolor;


    console.log("Color updated");
})

function getrandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}