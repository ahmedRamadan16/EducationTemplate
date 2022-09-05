(function(){
//add sticky class to nav in scroll

window.onscroll=function()
{
    document.querySelector("nav").classList.toggle("sticky", window.scrollY> 100);
};

//show answers for faq section 
let faqContainer=document.querySelectorAll(".faqs-questions .faq-container .faq");

faqContainer.forEach((faq)=>{
    faq.addEventListener("click",(e)=>{

        e.target.closest(".faq").classList.toggle("open");
        let i=faq.querySelector("i");
        if(i.className === "uil uil-plus")
        {
            i.className="uil uil-minus";
        }else{
            i.className="uil uil-plus";

        }
    });
});
// open  menu in mobile screen 

let openBtn=document.querySelector(".open-menu-btn");
let closeBtn=document.querySelector(".close-menu-btn");
let menu=document.querySelector("nav .nav__menu");
console.log(menu);
openBtn.addEventListener("click",function(e){
menu.style.display="flex";
closeBtn.style.display="inline-block";
openBtn.style.display="none"

});
closeBtn.addEventListener('click',()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    openBtn.style.display="inline-block"
    
})
























}());