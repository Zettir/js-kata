"use strict";

let cookie = document.querySelector("#cookie");
let cookieTerms = document.querySelector("#cookieTerms");

setTimeout(slideIn, 20);

function slideIn() {
    cookie.classList.remove("slideOut");
    cookie.classList.add("slideIn");
    cookieTerms.classList.remove("comeIn");     
}

document.querySelector("#cookie button").addEventListener("click", function() {
    cookie.classList.remove("slideIn");
    cookie.classList.add("slideOut");
    cookieTerms.classList.add("comeIn");     
});

cookieTerms.addEventListener("click", slideIn);