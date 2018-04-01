class GallerySlider {

    constructor() {

        this.galleryImageCont = document.querySelector("#galleryImagesCont");

        // check whether the page has gallery or not

        if (!this.galleryImageCont) {
            return;
        }

        this.rtArrow = document.querySelector("#rtArrow");

        this.ltArrow = document.querySelector("#ltArrow");

        // Getting widths of all images

        let images = this.galleryImageCont.querySelectorAll("img");

        this.widths = [];

        images.forEach((image) => {
            this.widths.push(image.offsetWidth)
        })

        // Slider Settings

        this.right = 0;//transform right of the gallery main cont

        // Let's listen on events

        this.initEvents();

    }

    initEvents() {

        this.rtArrow.onclick = () => {

            this.previous();

        };

        this.ltArrow.onclick = () => {


            this.ltArrow.style.display = "block";
            this.rtArrow.style.display = "block";

            this.next();

        };

    }

    next() {

        let right = this.right + window.innerWidth;

        let total = 0;
        let i;
        for (i = 0; i < this.widths.length; i++) {
            total += this.widths[i];
            if (total > right) {
                break;
            }
        }

        let transform = total - right;

        this.galleryImageCont.style.transform = "translateX(" + (transform + this.right) + "px)";

        this.right += transform;

        if (!this.widths[i + 1]) {
            // End
            this.ltArrow.style.display = "none";
        } else {
            this.rtArrow.style.display = "block";
        }
    }

    previous() {

        let right = this.right;

        let total = 0;
        let i;
        for (i = 0; i < this.widths.length; i++) {
            total += this.widths[i];
            if (total >= right) {
                total -= this.widths[i];
                break;
            }
        }

        let transform = this.right - total;

        this.galleryImageCont.style.transform = "translateX(" + (this.right - transform) + "px)";

        this.right -= transform;

        if (!this.widths[i - 1]) {
            // End
            this.rtArrow.style.display = "none";
        } else {
            this.ltArrow.style.display = "block";
        }
    }


}

module.exports = GallerySlider;