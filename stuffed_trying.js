/*
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
*/



const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    let person_name = card.id; // For readability
    console.log(card.id);
    let button = document.getElementById(person_name+"-button");
    let desc = document.getElementById(person_name+"-desc");

    button.addEventListener("click", () => {
        if(desc.style.display === "block"){
            desc.style.display = "none";
            button.innerHTML = "&#43;";
            button.style.background = "#FCFCFD";            
        }
        else{
            desc.style.display = "block";
            button.innerHTML = "&#8212";
            button.style.background = "rgb(150, 149, 146, .2)";
        }
    })
})



/*
cards.forEach(elements => {
    console.log(elements.id);
    let button = document.getElementById(elements.id+"-button");
    let desc = document.getElementById(elements.id+"-desc");
    button.addEventListener("click", (event) => {
        if(event.target === button){
            console.log("test");
            desc.classList.toggle("show-desc");
        }
    })
})
*/
