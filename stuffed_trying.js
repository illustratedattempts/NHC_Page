function myFunction(){
    var x = document.getElementById("Ionela-desc");
    var y = document.getElementById("Ionela-card");
    var butt = document.getElementById("button-changer");
    if(x.style.display === "none"){
        x.style.display = "block";
        y.style.height = "100%";
        butt.innerHTML = "&#8212";
        butt.style.background = "rgb(150, 149, 146, .2)";
    }
    else{
        x.style.display = "none";
        butt.innerHTML = "&#43;";
        butt.style.background = "#FCFCFD";
    }
}