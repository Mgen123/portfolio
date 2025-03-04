

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "name-menu"){
        menuBtn.className += "responsive";
    }else{
        menuBtn.className = "nav-menu"
    }
}

var typingEffect = new Typed(".typedText",{
    strings: ["a Student", "an Aspiring Programmer", "a Future Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 2000
});