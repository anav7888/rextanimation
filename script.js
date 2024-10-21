function breakText(){
var h1 = document.querySelector("h1")
var h1text = h1.textContent

var textSpace = h1text.split("")
var halfValue = textSpace.length/3

var clutter=""

textSpace.forEach(function(elem,idx){
   if(idx<halfValue){
        clutter += `<span class= "a">${elem}</span>`
   }else{
    clutter += `<span class= "b">${elem}</span>`
   }
})
h1.innerHTML = clutter
}

breakText()

gsap.from(".a",{
    y:50,
    duration:0.5,
    delay:0.2,
    stagger:0.15,
    opacity:0
})
gsap.from(".b",{
    y:50,
    duration:0.5,
    delay:0.4,
    stagger:-0.15,
    opacity:0
})
