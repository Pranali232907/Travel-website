const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container
ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-form", {
    ...scrollRevealOption,
    delay: 500,
});

//Trending Container
ScrollReveal().reveal(".trending-card", {
    ...scrollRevealOption,
    interval: 500,
});


//Destination Container
ScrollReveal().reveal(".destination-card", {
    duration: 1000,
    interval: 500,
});


//Seller Container
ScrollReveal().reveal(".seller-card", {
    ...scrollRevealOption,
    interval: 500,
});

//Guide Container
ScrollReveal().reveal(".guide-card", {
    ...scrollRevealOption,

    interval: 500,
});


//Client Container
ScrollReveal().reveal(".client-card", {
    ...scrollRevealOption,
    interval: 500,
});