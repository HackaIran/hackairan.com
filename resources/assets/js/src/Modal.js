class Modal{
    constructor(){

        this.listenEvents();

    }

    init(index){

        // fix scroll

        let wrapper = document.querySelector("#wrapper");

        let modal = document.querySelector(".modalWrapper");

        let hackaSection = document.querySelector(".hackaSection:nth-child("+(index+1)+")");

        let sectionName = hackaSection.getAttribute("data-name");

        let modalImage = document.querySelector(".modalHeadImg");

        let modalHeaderText = document.querySelector(".modalCont>header>h2");

        // wrapper.style.overflow = "hidden";

        modalImage.src = hackaSection.querySelector("img").src;

        modalHeaderText.innerHTML = hackaSection.querySelector("h2").innerHTML;

        this.triggerLoadingEvent();

        this.getContent(sectionName).then((data)=>{

            this.appendContent(data);

            this.triggerFinishLoadingEvent();

        })

        setTimeout(()=>{

            // Showing modal

            wrapper.style.transitionDuration = "0.5s";

            wrapper.style.filter = "blur(15px)";

            modal.style.visibility = "visible";

            modal.style.opacity = "1";

            modal.querySelector(".modalCont").style.transform = "scale(1)";


        },300)
    }

    triggerLoadingEvent(){
        let event = new Event("app:load");
        document.dispatchEvent(event);
    }

    triggerFinishLoadingEvent(){
        let event = new Event("app:loaded");
        document.dispatchEvent(event);
    }

    getContent(sectionName){

        return new Promise((resolve,reject)=>{
            axios.get("api/index/getPartial/"+sectionName).then((data)=>{
                resolve(data.data)
            });
        })

    }

    appendContent(data){
        document.querySelector(".modalCont main").innerHTML = data;
    }

    closeModal(){

        let wrapper = document.querySelector("#wrapper");

        let modal = document.querySelector(".modalWrapper");

        modal.querySelector(".modalCont").style.transform = "scale(0.5)";



        setTimeout(()=>{

            wrapper.style.transitionDuration = "0.5s";

            wrapper.style.filter = "blur(0px)";

            modal.style.visibility = "hidden";

            modal.style.opacity = "0";


        },200)
    }

    listenEvents(){

        let hackaSections = document.querySelectorAll(".hackaSection");

        let limit = hackaSections.length;

        for(let i = 0;i<limit;i++){

            hackaSections[i].onclick = ()=>{

                this.init(i);

            }

        }

        //for closing modal

        let closeModal = document.querySelector(".closeModal");

        closeModal.onclick = ()=>{
            this.closeModal();
        }

    }

}

module.exports = Modal;