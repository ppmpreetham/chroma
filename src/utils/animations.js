import gsap from "gsap";
import { useEffect } from "react";

// Example animation

export const AnimatePageIn = () => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();
        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], { 
            yPercent: 0
            // for out, set it to be 100
        })
        .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 100,
            // for out, set it to be 0
            stagger: 0.2,
        });
    }
    return null;
};

export const AnimatePageOut = (href, router) => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();
        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], { 
            yPercent: -100,
        })
        .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0,
            // for out, set it to be 0
            stagger: 0.2,
            onComplete: () => {
                router.push(href);
            },
        });
    }
    return null;
}