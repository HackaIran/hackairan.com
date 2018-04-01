class TimeLine {

    constructor(bars) {

        this.bars = bars;

        this.timeLineWrapper = document.querySelector("#timeline");

        this.upComingWrapper = document.querySelector("#eventSection>div>aside>ul");

        this.inactives = this.bars.filter(item => item.time.timestamp < Date.now()).length;

        this.appendBarLines();

        this.appendUpcomingEvents();

        //Hiding Loading

        this._hideLoading();

        this.initialEvents();

        if (this.bars.length == 0) {// if there is no events

            this._noEventFound();

            return;
        }

        if (this.bars.length - this.inactives == 0) {// all events are passed
            this.showEvent(this.inactives - 1);//showing the nearest past event
        } else {
            this.showEvent(this.inactives);//showing the nearest upcoming event
        }


    }

    ////////////
    //
    //  Let's Append Bar Lines
    //
    ///////////

    appendBarLines() {
        for (let bar of this.bars) {

            let barProps = this.calculateProps(bar.time.timestamp);

            let barEl = document.createElement("div");

            barEl.classList += "bar inactive";

            barEl.innerHTML = "<div><span>" + barProps.remaining + "</span><span>" + bar.time.nameGregorian + "</span></div><div></div>";

            barEl.style.left = barProps.left + '%';

            this.timeLineWrapper.appendChild(barEl);

        }
    }

    ////////////
    //
    //  Let's Append Up Coming Events
    //
    ///////////

    appendUpcomingEvents() {

        for (let bar of this.bars) {

            if (bar.time.timestamp < Date.now()) {
                continue;
            }

            let upComEl = document.createElement("li");

            upComEl.setAttribute("data-active", "false");

            upComEl.innerHTML = "<h3>" + bar.title + "</h3><h4>" + bar.location + "</h4><time>" + bar.time.nameGregorian + " - " + bar.time.nameJalali;

            this.upComingWrapper.appendChild(upComEl);

        }

    }

    ////////////
    //
    //  Let's Add Click Events For Time Line And Up Coming Event
    //
    ///////////

    initialEvents() {

        let bars = document.querySelectorAll(".bar");

        for (let i = 0; i < bars.length; i++) {
            bars[i].onclick = () => {
                this.showEvent(i);
            }
        }

        let upComs = this.upComingWrapper.querySelectorAll("li");

        for (let i = 0; i < upComs.length; i++) {
            upComs[i].onclick = () => {
                //Showing Event
                this.showEvent(i + this.inactives);
            }
        }

    }

    calculateProps(timestamp) {

        const date = moment(timestamp);

        const diffWithNow = -moment().diff(date, 'days');

        let remaining = Math.abs(diffWithNow) + ' days';

        if (Math.abs(diffWithNow) > 30) {

            let remMonth = Math.floor(Math.abs(diffWithNow) / 30);

            if (remMonth > 1) {
                remaining = '~' + remMonth + ' months';
            } else {
                remaining = '~' + remMonth + ' month';
            }

        }

        remaining += diffWithNow < 0 ? ' ago' : ' to go';

        if (diffWithNow === 0) {
            if (moment().diff(date, "hours") >= 0) {
                remaining = moment().diff(date, "hours") + " Hours Left";
            }
        }

        const left = (diffWithNow / 60 * 50) + 50;

        return {
            left: left,
            remaining: remaining
        };

    }

    showEvent(index) {

        let barEl = document.querySelectorAll(".bar")[index];

        let descriptionCont = document.querySelector("#eventDescriptionCont");

        if (barEl.getAttribute("data-active") != "true") {// If Not Currently Being Showed

            // A Little Animation

            descriptionCont.style.transform = "scale(1.03) translate(-10px, -10px)";

            descriptionCont.style.opacity = "0";

            setTimeout(() => {//After Animation

                // Change Event Description

                this._changeEventDescription(this.bars[index]);

                //inactive the last one

                if (document.querySelector(".bar.active")) {
                    document.querySelector(".bar.active").classList = "bar inactive";
                }

                if (this.bars[index].time.timestamp >= Date.now()) {// if current bar is not passed --> highlight the upcoming event li

                    if (this.upComingWrapper.querySelector("li[data-active=true]")) {
                        this.upComingWrapper.querySelector("li[data-active=true]").setAttribute("data-active", "false");
                    }

                    this.upComingWrapper.querySelectorAll("li")[index - this.inactives].setAttribute("data-active", "true");

                } else {

                    //unhighlight the upcoming li(if exists)

                    if (this.upComingWrapper.querySelector("li[data-active=true]")) {
                        this.upComingWrapper.querySelector("li[data-active=true]").setAttribute("data-active", "false");
                    }
                }

                barEl.classList = "bar active";

                descriptionCont.style.opacity = "1";

                descriptionCont.style.transform = "scale(1) translate(0px,0px)";

            }, 200)
        }

    }

    _changeEventDescription(bar) {

        let eventBtn = document.querySelector("#eventBtn");

        if (bar.time.timestamp > Date.now()) {
            eventBtn.setAttribute("data-active", "true");
            eventBtn.innerText = "Register";
        } else {
            eventBtn.setAttribute("data-active", "false");
            eventBtn.innerText = "Passed!";
        }

        eventBtn.setAttribute("href", bar.register_link);

        document.querySelector("#eventDescriptionCont>h2").innerText = bar.title;

        document.querySelector("#eventDescriptionCont>h3").innerText = bar.location;

        document.querySelector("#eventDescriptionCont>time").innerText = bar.time.nameGregorian + " - " + bar.time.nameJalali;

        document.querySelector("#eventDescriptionCont>p").innerHTML = bar.short_description;

    }

    _hideLoading() {
        document.querySelector("#eventPreLoader").remove();
        document.querySelector("#eventSectionWrapper").style.filter = "blur(0px)";
    }

    _noEventFound() {
        document.querySelector("#noEventFound").style.display = "flex";
        document.querySelector("#eventSectionWrapper").style.filter = "blur(15px)";
    }

}

module.exports = TimeLine;