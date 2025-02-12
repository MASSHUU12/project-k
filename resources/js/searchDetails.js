let listings = document.querySelectorAll(".search-single-listing-inner"); //select listing on search page

//iterate over the listings
listings.forEach((listing) => {
    //select all the needed elements
    let button = listing.querySelector(".button-secondary");
    let image = listing.querySelector("img");
    let icons = listing.querySelector(".listing-bottom-icons");
    let name = listing.querySelector(".listing-name");
    let bottom = listing.querySelector(".listing-active-bottom");

    //animate when the button is pressed
    button.addEventListener("click", () => {
        if (listing.classList.contains("active")) {
            listing.classList.remove("active");
            icons.classList.remove("active");
            gsap.to(listing, {
                duration: 0.8,
                height: "180px",
                ease: "power4",
            });
            gsap.to(image, {
                duration: 0.8,
                height: "150px",
                width: "200px",
                y: "0",
                ease: "power4",
            });
            gsap.to(listing, { delay: 0.8, duration: 0.1, zIndex: 1 });
            gsap.to(button, { duration: 0.8, y: "0", ease: "power4" });
            gsap.to(icons, { duration: 0, opacity: 0 });
            gsap.to(icons, {
                delay: 0.8,
                duration: 0.8,
                opacity: 1,
                ease: "slowmo",
            });
            if (window.innerWidth > 500) {
                gsap.to(name, {
                    delay: 0,
                    duration: 0,
                    opacity: 0,
                    ease: "slowmo",
                });
                gsap.to(name, {
                    delay: 0.1,
                    duration: 0.1,
                    x: "0",
                    y: "0",
                    ease: "slowmo",
                });
                gsap.to(name, {
                    delay: 0.6,
                    duration: 0.4,
                    opacity: 1,
                    ease: "slowmo",
                });
            }

            if (locale == "pl") button.innerHTML = "więcej";
            else if (locale == "en") button.innerHTML = "more";
            else if (locale == "de") button.innerHTML = "mehr";

            bottom.classList.remove("active");
        } else {
            listing.classList.add("active");
            icons.classList.add("active");
            gsap.to(listing, {
                duration: 0.8,
                height: "390px",
                ease: "power4",
            });
            gsap.to(image, {
                duration: 0.8,
                height: "270px",
                width: "350px",
                y: "50px",
                ease: "power4",
            });
            gsap.to(listing, { duration: 0.01, zIndex: 50 });
            gsap.to(button, {
                duration: 0.8,
                y: "165px",
                ease: "power4",
            });
            gsap.to(icons, { duration: 0, opacity: 0 });
            gsap.to(icons, {
                delay: 0.8,
                duration: 0.5,
                opacity: 1,
                ease: "slowmo",
            });
            gsap.from(icons, {
                delay: 0.8,
                duration: 0.5,
                y: "-30px",
                ease: "slowmo",
            });
            if (window.innerWidth > 500) {
                gsap.to(name, {
                    delay: 0,
                    duration: 0.1,
                    opacity: 0,
                    ease: "slowmo",
                });
                gsap.to(name, {
                    delay: 0.1,
                    duration: 0.1,
                    x: "-360px",
                    y: "10px",
                    ease: "slowmo",
                });
                gsap.to(name, {
                    delay: 0.6,
                    duration: 0.4,
                    opacity: 1,
                    y: "-10px",
                    ease: "slowmo",
                });
            }

            if (locale == "pl") button.innerHTML = "mniej";
            else if (locale == "en") button.innerHTML = "less";
            else if (locale == "de") button.innerHTML = "weniger";

            setTimeout(() => {
                bottom.classList.add("active");
            }, 500);
        }
    });
});
