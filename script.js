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

function updateCountdown(){

    const now = new Date();

    const diff = unlockDate - now;

    if(diff <= 0){

        lockScreen.style.display = "none";
        websiteContent.style.display = "block";

        return;

    }

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(diff / (1000*60*60)) % 24;

    const minutes = Math.floor(diff / (1000*60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    countdown.innerHTML = `(${days}d ${hours}h ${minutes}m ${seconds}s)`;

}

updateCountdown();

setInterval(updateCountdown,1000);

lockBtn.addEventListener("click",()=>{

    clicks++;

    lockBtn.animate([

        {transform:"scale(1)"},

        {transform:"scale(.92)"},

        {transform:"scale(1.05)"},

        {transform:"scale(1)"}

    ],{

        duration:300

    });

    if(clicks===5){

        lockMessage.innerHTML =
        "🤨 You're really curious, aren't you?";

        return;

    }

    if(clicks===10){

        lockMessage.innerHTML =
        "😂 Okay okay... stop pressing me!";

        return;

    }

    if(clicks===20){

        lockMessage.innerHTML =
        "❤️ I promise it'll be worth the wait.";

        return;

    }

    const random =
    funnyMessages[
        Math.floor(Math.random()*funnyMessages.length)
    ];

    lockMessage.innerHTML = random;

});

const openBtn = document.getElementById("openBtn");

const fade = () => {
    document.body.style.transition = "opacity .9s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "jana.html";
    }, 900);
};

openBtn.addEventListener("click", fade);