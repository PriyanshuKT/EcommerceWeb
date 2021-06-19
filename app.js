const searchBtn = document.querySelector("#search-btn")
const searchBar = document.querySelector(".search-bar-container")
const loginBtn = document.querySelector("#login-btn")
const closeform = document.querySelector("#form-close")
const loginform = document.querySelector(".login-form-container")
const menu = document.querySelector("#menu-bar")
const nav = document.querySelector(".navbar")
const videoBtn = document.querySelectorAll(".video-btn")

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('b');
});
searchBtn.addEventListener("click" ,()=>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})
loginBtn.addEventListener("click" ,()=>{
    loginform.classList.add('active')
})
closeform.addEventListener("click" ,()=>{
    loginform.classList.remove('active')
})
videoBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        document.querySelector(".controls .active").classList.remove("active")
        btn.classList.add("active")
        let sourceOfVideo = btn.getAttribute("data-src")
        document.querySelector("#video-slider").src = sourceOfVideo
    })

})

// videoBtn.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//         let src = btn.getAttribute('data-src');
//         document.querySelector('#video-slider').src = src;
//     });
// });