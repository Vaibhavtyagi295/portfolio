function reveal(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        var parent = document.createElement("span");
        var child = document.createElement("span");
    
        parent.classList.add("parent");
        child.classList.add("child");
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child)
        elem.innerHTML= "";
        elem.appendChild(parent)
    });
}
reveal();
var tl = gsap.timeline();

tl.from(".child span",{
    y:200,
    duration:1,
    stagger:.2,
    delay:0.4,
    opacity: 0,
    ease: Expo.easeInOut
})

tl.to(".parent .child",{
    y:"-100%",
    duration:1,
    delay:1,
    ease: Expo.easeInOut
})
.to("#loader",{
    height:0,
    duration:1,
    ease: Circ.easeInOut
})
.to("#green",{
    height:"100%",
    duration:1,
    delay:-2,
    ease: Circ.easeInOut
})

tl.from("#header",{
    x:"100%",
    opacity:1,
    delay:0.3,
    duration:2
});
tl.from("#vai",{
    y:"100",
    opacity:0,
    delay:0.3,
    duration:1
});
tl.from("#bha",{
    y:"100",
    opacity:0,
    delay:0.3,
    duration:1
});
tl.from("#av",{
    y:"100",
    opacity:0,
    delay:0,
    duration:1
});
tl.from("#navbar",{
    x:"100%",
    opacity:0,
    delay:-0.2,
    duration:1
});
tl.from("#hero",{
    x:"100%",
    opacity:0,
    delay:0,
    duration:2
});
tl.from("#hero h2 ",{
    y:"100%",
    opacity:0,
    delay:-0.4,
    duration:2
});
tl.from("#hero p ",{
    y:"100%",
    opacity:0,
    delay:-0.4,
    duration:2
});
tl.from("#hero h1 ",{
    y:"100%",
    opacity:0,
    delay:-0.4,
    duration:2
});
tl.from("#hero button ",{
    y:"100%",
    opacity:0,
    delay:-0.4,
    duration:2
});

gsap.from("#project #img",{
    x:"100%",
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#project #img",
        scroller:"body",
        start:"top 50%",
         markers:false,
    }
    
});
gsap.from("#project  #loop",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#project #loop",
        scroller:"body",
        start:"top 60%",
         markers:false,
    }
    
});
gsap.from("#project  #love",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#project #love",
        scroller:"body",
        start:"top 60%",
         markers:false,
    }
    
});
gsap.from("#project  #loo",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#project #love",
        scroller:"body",
        start:"top 60%",
         markers:false,
    }
    
});
/*gsap.from("#skills  #container",{
   
    opacity:0,
    duration:0.4,
    scrollTrigger:{
        trigger:"#skills  #container",
        scroller:"body",
        start:"top 0%",
  
    }
    
});
gsap.from("#skills  h4",{
   
    opacity:0,
    duration:0.4,
    scrollTrigger:{
        trigger:"#skill h4",
        scroller:"body",
        start:"top 0%",
   
    }
    
});
gsap.from("#skills  hr",{
    x:"100%",
   
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#skill h4",
        scroller:"body",
        start:"top 2%",
      
    }
    
});*/

/*
tl.from("#skills",{
    opacity:0,
    duration:1,
    ScrollTrigger:{
         trigger:"#project",
         scroller:"#project",
         markers:true,
    }
    
});
/*
tl.from("#skills #skill",{
    opacity:0,
    duration:1,
    ScrollTrigger:{
         trigger:"#project",
         scroller:"#project",
         markers:true,
    }
    
});

    





/**/ 

var images=['moonwatch.png','reindeer.png','web.png'];

var i=0;
function slideshow(){
    document.getElementById("img").src=images[i];
    if(i<images.length-1){
        i++
    }else{
        i=0;
    }
    setTimeout("slideshow()",4000)
}
slideshow();
var image=["This project is created using HTML,CSS,GSAP","This project is created using HTML,CSS,GSAP","This project is created using HTML,CSS,GSAP,ScrollTrigger"];
var b =0;
function slide(){
    document.getElementById("loop").innerHTML=image[b];
    if(b<image.length-1){
        b++
        
    }else{
        b=0;
    }
    setTimeout("slide()",4000)
}
slide();

var lov=["In this project i learned approchinging modern website and applying animations to the web-site","In this project i learned approchinging modern website and applying animations to the web-site","In this project i learned approchinging modern website and applying animations and Locomotive js to the web-site"];
var c =0;
function lover(){
    document.getElementById("love").innerHTML=lov[c];
    if(c<image.length-1){
        c++
    }else{
        c=0;
    }
    setTimeout("lover()",4000)
}
lover();



var hr=["https://vaibhavtyagi295.github.io/project-web/"," https://vaibhavtyagi295.github.io/Moonwatch/","https://vaibhavtyagi295.github.io/reindeer/"];
var c =0;
function side(){
    document.getElementById("loo").href=hr[c];
    document.getElementById("loo").textContent=hr[c];
    if(c<hr.length-1){
        c++
    }else{
        c=0;
    }
    setTimeout("side()",1000)
}
side()
 function aman(){
let number = document.querySelector(".number");
let counter = 0;
setInterval(()=>{
    if(counter == 80){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML =counter +"%"
    }
},80);
}
 function aman(){
let number = document.querySelector(".number");
let counter = 0;
setInterval(()=>{
    if(counter == 83){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML =counter +"%"
    }
},80);
}
 function ama(){
let number = document.querySelector(".numbe");
let counter = 0;
setInterval(()=>{
    if(counter == 78){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML =counter +"%"
    }
},80);
}
 function am(){
let number = document.querySelector(".numb");
let counter = 0;
setInterval(()=>{
    if(counter == 60){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML =counter +"%"
    }
},80);
}
 function a(){
let number = document.querySelector(".num");
let counter = 0;
setInterval(()=>{
    if(counter == 80){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML =counter +"%"
    }
},80);
}

 function ab(){
let number = document.querySelector(".nu");
let counter = 0;
setInterval(()=>{
    if(counter == 40){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML =counter +"%"
    }
},80);
}
aman();
ama();
am();
a();
ab();
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}
