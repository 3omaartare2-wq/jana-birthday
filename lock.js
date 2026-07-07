window.history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0, 0);
};

const message = `Y Rooooooby ❤️

Kol sana w ente tayba y rooooby w 3o2bal yarab m tb2e kda million sana.

Enharda yo3tabr awl 3eed milad leeke w e7na m3a b3d.

Insha'allah msh hayb2a akhr 3eed milad oltehalk.

Oltehalk mra w b2olhalk delwa2te...
Msh hat3rafe tekhlase mne y Jana y Roooooby 😏

Yarab tkon el presents 3agbtk y Jana.

Yarab akon fe 7osn zank kda.

Ana b7bk w b7b kol haga feeke.

Enharda sa7 your special day...

Bas ente btkhale kol youm fe hiate special bwgodk feeh ❤️

With Love ❤️

Omar (Moro)`;

const box = document.getElementById("message");
const music = document.getElementById("bgMusic");

if (music) {
    music.volume = 0.35;
}

let i = 0;

function type() {

    if (i < message.length) {

        box.innerHTML =
            message.substring(0, i) +
            '<span class="cursor"></span>';

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

        i++;

        setTimeout(type, 50);

    } else {

        box.innerHTML = message;

    setTimeout(()=>{

        document
        .getElementById("secretLetter")
        .classList.remove("hidden");

    },1000);

    }

}

const intro = document.getElementById("intro");

setTimeout(() => {

    intro.classList.add("hide");

    if (music) {

        music.play().catch(()=>{});

    }

    setTimeout(() => {

        type();

    },700);

},2000);

const hearts = document.getElementById("hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (16 + Math.random() * 18) + "px";

    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    heart.style.setProperty(
        "--drift",
        (Math.random() * 200 - 100) + "px"
    );

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 700);

const letterBtn = document.getElementById("letterBtn");
const letterCard = document.getElementById("letterCard");

letterBtn.addEventListener("click", () => {
    // 1. إخفاء الرسالة الأولى الطويلة تماماً
    document.getElementById("message").style.display = "none";
    
    // 2. إخفاء عنوان الصفحة الأساسي (Y Rooooooby) إذا كنت تريد إخفاءه أيضاً
    document.querySelector(".container h1").style.display = "none";

    // 3. إظهار الرسالة السرية الصغيرة لوحدها
    letterCard.style.display = "block";

    // 4. إخفاء الزرار نفسه لأنه لم يعد له حاجة
    letterBtn.style.display = "none";

    // 5. إعادة الشاشة لأعلى الصفحة لتشاهد الرسالة من البداية بدون مسافات فارغة
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const letter = document.getElementById("letterBtn");
const question = document.getElementById("finalQuestion");

letter.addEventListener("click",()=>{

    setTimeout(()=>{

        question.classList.remove("hidden");

    },1500);

});

const answerBtns = document.querySelectorAll(".answerBtn");

answerBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document.getElementById("finalQuestion").innerHTML = `
            <h2 style="color:#ff6b6b;">
                ❤️ Mission Accomplished ❤️
            </h2>

            <p style="margin-top:20px;font-size:20px;">
                Happy Birthday,<br>
                Y Rooooooby ❤️
            </p>
        `;

        celebrate();

    });

});

function celebrate(){

    // الكونفيتي من فوق
    confetti({

        particleCount:180,

        spread:90,

        origin:{y:.6}

    });

    // ألعاب نارية من اليمين والشمال

    const duration = 3000;

    const end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount:4,

            angle:60,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:4,

            angle:120,

            spread:70,

            origin:{x:1}

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}