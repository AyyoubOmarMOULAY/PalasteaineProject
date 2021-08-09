(()=>{
    let sliderContainer = document.querySelector(".slider-wraoper")
    let slides = document.querySelectorAll(".slider-wraoper .text")
    let nextBtn = document.querySelector(".next")
    let prevBtn = document.querySelector(".prev")
    let sliderWidth = sliderContainer.offsetWidth;
    let slideIndex = 0;
    slides.forEach(slide => {
        slide.style.width = `${sliderWidth}px`
    })
    nextBtn.onclick = () => {
        slideIndex == slides.length - 1 ? slideIndex= 0 : slideIndex++
        sliderContainer.style.marginRight = `-${slideIndex * sliderWidth}px`
    }
    prevBtn.onclick = () => {
        slideIndex == 0 ? slideIndex = slides.length - 1  : slideIndex--
        sliderContainer.style.marginRight = `-${slideIndex * sliderWidth}px`
    }
    let barsBtn = document.querySelector(".toggler")
    let nav = document.querySelector("#nav")
    let searchBox = document.querySelector(".searchBox")
    barsBtn.onclick = () => {
        nav.classList.toggle("active")
        searchBox.classList.toggle("hidden")
    }
})();
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});