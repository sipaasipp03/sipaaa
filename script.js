const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});

function buatGelembung() {
    const bubble = document.createElement("span");

    bubble.classList.add("gelembung");

    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    bubble.style.width =
        (8 + Math.random() * 15) + "px";

    bubble.style.height =
        bubble.style.width;

    document.body.appendChild(bubble);

    setTimeout(function () {
        bubble.remove();
    }, 7000);
}

setInterval(buatGelembung, 1000);

const kotak = document.querySelectorAll(".kotak");

function cekScroll() {

    kotak.forEach(function (item) {

        const posisi =
            item.getBoundingClientRect().top;

        const tinggiLayar =
            window.innerHeight;

        if (posisi < tinggiLayar - 80) {
            item.classList.add("muncul");
        }

    });
}

window.addEventListener("scroll", cekScroll);

cekScroll();

const tombol = document.querySelector(".tombol-kirim");

if (tombol) {
    tombol.addEventListener("click", function () {
        tombol.value = "Terkirim!";
    });
}