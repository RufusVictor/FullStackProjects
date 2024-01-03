for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        makeSound(key)
        animaButton(key)
    });
}
document.addEventListener("keydown", function(Event){
var inp = Event.key
makeSound(inp)
animaButton(inp)
});
function makeSound(inputHere) {
    switch (inputHere) {
        case "w":
            var fw = new Audio('sounds/tom-1.mp3')
            fw.play()
            break;
        case "a":
            var fa = new Audio('sounds/tom-2.mp3')
            fa.play()
            break;
        case "s":
            var fs = new Audio('sounds/tom-3.mp3')
            fs.play()
            break;
        case "d":
            var fd = new Audio('sounds/tom-4.mp3')
            fd.play()
            break;
        case "j":
            var fj = new Audio('sounds/crash.mp3')
            fj.play()
            break;
        case "k":
            var fk = new Audio('sounds/kick-bass.mp3')
            fk.play()
            break;
        case "l":
            var fl = new Audio('sounds/snare.mp3')
            fl.play()
            break;
        default:
            break;
    }
}

function animaButton(currentKey){
var activeButton=document.querySelector("."+currentKey)
activeButton.classList.add("pressed")
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100)
}