var images=["download (1).jfif","download (2).png","download.jfif"]
var text=["this is mister bean","this is cookiebrain","this is 1+1"]
var slide = 1
function nextslide(){
document.getElementById("images").src = images[slide]
document.getElementById("text").innerHTML = text[slide]
if(slide>3){
    slide=1
}
slide=slide+1
}