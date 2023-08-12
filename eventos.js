const divbutton = document.getElementById("divbtn");
const button = document.getElementById("btn")
function saludar(){
    alert("Hola");
}

divbutton.addEventListener("click",function(e){    
    alert("Hola! soy el div");
    })
button.addEventListener("click",function(e){
    e.stopPropagation();
    saludar();        
})