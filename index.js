for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var keypressed=this.textContent;
        makeSound(keypressed);
        buttonAnimation(keypressed);
        
    });
}
document.addEventListener("keypress",function(){
    var name=event.key;
    makeSound(name);
    buttonAnimation(name);
    
})
function makeSound(key){
    switch(key){
        case "w":var aud=new Audio("sounds/tom-1.mp3");
                aud.play();
                break;
        case "a":var aud1=new Audio("sounds/tom-2.mp3");
                aud1.play();  
        case "s":var aud1=new Audio("sounds/tom-3.mp3");
                aud1.play();  
                break;
        case "d":var aud1=new Audio("sounds/tom-4.mp3");
                aud1.play();  
                break;
        case "j":var aud1=new Audio("sounds/snare.mp3");
                aud1.play();  
                break;
        case "k":var aud1=new Audio("sounds/crash.mp3");
                aud1.play(); 
                break;
        case "l":var aud1=new Audio("sounds/kick-bass.mp3");
                aud1.play();  
                break;                                  
    }
}

function buttonAnimation(currentButton){
        var buttonSelected=document.querySelector("."+currentButton);
        buttonSelected.classList.add("pressed");
        setTimeout(function(){
                buttonSelected.classList.remove("pressed")
        },50)
}
