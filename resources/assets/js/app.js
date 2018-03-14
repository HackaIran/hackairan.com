const TimeLine = require("./src/TimeLine");

const Loading = require("./src/Loading");

const GallerySlide = require("./src/GallerySlider");

const loading = new Loading();

const gallerySlider = new GallerySlide();

document.addEventListener("DOMContentLoaded", () => {

    //Let's Get The Events

    axios.get("api/index/getTimeLine/"+window.type).then((data)=>{
        const timeline = new TimeLine(data.data);
    });

});

document.addEventListener("app:load",function(){
    loading.showLoading();
});

document.addEventListener("app:loaded",function(){
    loading.hideLoading();
});

// let's show loading untill page is fully loaded

loading.showLoading();

window.onload = ()=>{
    loading.hideLoading();
}