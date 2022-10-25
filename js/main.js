const load=document.getElementById("load");
const btn=document.querySelector("#btn");
const nav=document.getElementById("nav");
let sect=document.getElementsByClassName("sect");
let set=document.getElementsByClassName("set");
let ind=0,
    mq=window.matchMedia("(min-width: 1200px)");
let sectTwo=document.getElementsByClassName("sect-two");
let w=document.getElementById("w");
const scale=document.getElementById("scale");
window.addEventListener("DOMContentLoaded",()=>{
    document.documentElement.scrollTop=0;
    setTimeout(()=>{
        load.style.display= "none";
    },1600);
})
let scr=document.querySelectorAll(".scr");
    scr.forEach((e)=>{
        e.addEventListener("click",()=>{
            scr.forEach(e=>e.classList.remove("active"));
            e.classList.add("active");
            
        })
    })

    btn.addEventListener("click",()=>{
        document.documentElement.scrollTop=0;
        document.body.scrollTop=0;
    });
if(mq.matches){
    window.addEventListener("scroll",()=>{
        y=scrollY;
        if(y >= 400){
            btn.style.display="block";
            nav.classList.add("pos");
        }
        else{
            btn.style.display="none";
            nav.classList.remove("pos");
        }
        if(y >= 450 && y <= 1500){
            for(let i=0; i<set.length; i++){
                set[i].style.left=0;
                sect[i].style.right=0;
                set[i].style.opacity=1;
                sect[i].style.opacity=1;
            }
            sect[1].style.transition="2s ease-in-out";
            set[1].style.transition="1.9s ease-in-out";
        }
        else{
            for(let i=0; i<set.length; i++){
                set[i].style.left="30%";
                sect[i].style.right="30%";
                set[i].style.opacity=0;
                sect[i].style.opacity=0;
            }
        }
        if(y >= 1300 && y < 2300){
            for(let i=0; i< sectTwo.length; i++){
                sectTwo[i].style.top=0;
                sectTwo[i].style.opacity=1;
            }
            sectTwo[1].style.transition="1.7s"
        }
        else{
            for(let i=0; i< sectTwo.length; i++){
                sectTwo[i].style.top="30%";
                sectTwo[i].style.opacity=0;
            }
        }
        if(y >= 1900 && y < 2600){
            scale.style.transform="scale(1)";
        }
        else{
            scale.style.transform="scale(0)";
        }
        if(y >= 3200 && y < 4000){
            w.style.opacity=1;
            w.style.transform="translateX(0)";
        }
        else{
            w.style.opacity=0;
            w.style.transform="translateX(100%)";
        }
    })
}