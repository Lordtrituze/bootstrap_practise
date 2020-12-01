function checkInput(){
    let nameInput = document.getElementById("name");
    if (nameInput.value != ""){
        console.log(nameInput.value)
        enterAbout();
    }else{
        alert("You have to enter your name first!");
    }
}

function enterAbout(){
    window.location.replace("about.html");
}