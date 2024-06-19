var body =document.querySelector("body")
var cousor=document.querySelector("#cousor")

body.addEventListener("mousemove",function(dets){
    cousor.style.left =dets.x+"px";
    cousor.style.top =dets.y+"px";
})
git commit -m "first commit"