const TimeLine = require("./src/TimeLine");

const Loading = require("./src/Loading");

const Modal = require("./src/Modal")

const loading = new Loading();

const modal = new Modal();

document.addEventListener("DOMContentLoaded", () => {

    //Let's Get The Events

    axios.get("api/index/getTimeLine").then((data)=>{
        const timeline = new TimeLine(data.data);
    });
});

document.addEventListener("app:load",function(){
    loading.showLoading();
});

document.addEventListener("app:loaded",function(){
    loading.hideLoading();
});