/* ===========================
   MOBILE ONLY
=========================== */

function checkDevice() {

    const isMobile =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i
        .test(navigator.userAgent);

    const desktopMessage =
        document.getElementById("desktopMessage");

    const passwordScreen =
        document.getElementById("passwordScreen");

    const lockScreen =
        document.getElementById("lockScreen");

    const websiteContent =
        document.getElementById("websiteContent");


    if (!isMobile) {

        desktopMessage.style.display = "flex";

        passwordScreen.style.display = "none";
        lockScreen.style.display = "none";
        websiteContent.style.display = "none";

        return false;
    }

    return true;
}

if (!checkDevice()) {

    throw new Error("Mobile devices only");

}

/* ===========================
   PASSWORD SCREEN
=========================== */

const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const passwordBtn = document.getElementById("passwordBtn");
const passwordMessage = document.getElementById("passwordMessage");

const correctPassword = "b7bk y moro";

function checkPassword() {

    const enteredPassword = passwordInput.value.trim().toLowerCase();

    if (enteredPassword === correctPassword) {

        passwordMessage.innerHTML = "❤️ Welcome...";

        passwordScreen.style.opacity = "0";

        setTimeout(() => {
            passwordScreen.style.display = "none";
        }, 700);

    } else {

        passwordMessage.innerHTML = "😏 Nope... try again.";

        passwordInput.value = "";

        passwordInput.animate([
            { transform: "translateX(0)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0)" }
        ], {
            duration: 300
        });

    }

}

passwordBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        checkPassword();
    }

});


/* ===========================
   LOCK SCREEN
=========================== */

const unlockDate = new Date("2026-08-01T00:00:00");

const lockScreen = document.getElementById("lockScreen");
const websiteContent = document.getElementById("websiteContent");
const countdown = document.getElementById("countdown");
const lockBtn = document.getElementById("lockBtn");
const lockMessage = document.getElementById("lockMessage");

const funnyMessages = [

    "😂 Nice try... not today.",

    "🙈 No peeking!",

    "🎁 The gift is still wrapping itself.",

    "❤️ Patience makes surprises sweeter.",

    "😏 You thought it would be that easy?",

    "🎂 Almost... but not yet.",

    "💌 Come back on the special day.",

    "✨ Magic takes time.",

    "🥹 I know you're curious.",

    "🔒 Still locked..."

];

let clicks = 0;

function updateCountdown() {

    const now = new Date();

    const diff = unlockDate - now;

    if (diff <= 0) {

        lockScreen.style.display = "none";
        websiteContent.style.display = "block";

        return;

    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes =
        Math.floor(diff / (1000 * 60)) % 60;

    const seconds =
        Math.floor(diff / 1000) % 60;

}

updateCountdown();

setInterval(updateCountdown, 1000);


lockBtn.addEventListener("click", () => {

    clicks++;

    lockBtn.animate([

        { transform: "scale(1)" },

        { transform: "scale(.92)" },

        { transform: "scale(1.05)" },

        { transform: "scale(1)" }

    ], {

        duration: 300

    });


    if (clicks === 5) {

        lockMessage.innerHTML =
            "🤨 You're really curious, aren't you?";

        return;

    }


    if (clicks === 10) {

        lockMessage.innerHTML =
            "😂 Okay okay... stop pressing me!";

        return;

    }


    if (clicks === 20) {

        lockMessage.innerHTML =
            "❤️ I promise it'll be worth the wait.";

        return;

    }


    const random =
        funnyMessages[
            Math.floor(Math.random() * funnyMessages.length)
        ];

    lockMessage.innerHTML = random;

});


/* ===========================
   OPEN SURPRISE
=========================== */

const openBtn = document.getElementById("openBtn");

const fade = () => {

    document.body.style.transition = "opacity .9s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "jana.html";

    }, 900);

};

openBtn.addEventListener("click", fade);