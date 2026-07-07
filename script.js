const openBtn = document.getElementById("openBtn");

const fade = () => {
    document.body.style.transition = "opacity .9s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "jana.html";
    }, 900);
};

openBtn.addEventListener("click", fade);