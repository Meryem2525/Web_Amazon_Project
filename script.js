// document.querySelector(".right-btn").addEventListener("click",{
//     function (event) {
//         console.log("done")
//         document.querySelector(".product-slide").scrollLeft +=1100;
//         event.preventDefault();
//     }
// })

const leftbtn=document.querySelector(".left-btn");
const rightbtn=document.querySelector(".right-btn");

rightbtn.addEventListener('click',function(event){
    // console.log("sağa tıkladım")
    const content=document.querySelector('.product-slide');
    content.scrollLeft +=1100;
    event.preventDefault();
})

leftbtn.addEventListener('click',function(event){
    // console.log("sola tıkladım")
    const content=document.querySelector('.product-slide');
    content.scrollLeft -=1100;
    event.preventDefault();
})

// burda 2. scroll-slide yaptım
const leftbtn1=document.querySelector(".btn-1b");
const rightbtn1=document.querySelector(".btn-1a");

rightbtn1.addEventListener('click',function(event){
    // console.log("sağa tıkladım")
    const content=document.querySelector('.product-slide-1');
    content.scrollLeft +=1100;
    event.preventDefault();
})

leftbtn1.addEventListener('click',function(event){
    // console.log("sola tıkladım")
    const content=document.querySelector('.product-slide-1');
    content.scrollLeft -=1100;
    event.preventDefault();
})



