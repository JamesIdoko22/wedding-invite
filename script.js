const weddingDate = new Date("September 5, 2026 14:00:00").getTime();

/* OPEN ENVELOPE */
function openEnvelope() {

    const envelope = document.getElementById("luxEnvelope");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const inviteScreen = document.getElementById("inviteScreen");
    const music = document.getElementById("bgMusic");

    music.volume = 0.6;
    music.play();

    envelope.classList.add("open");

    createSparkles();

    setTimeout(() => {
        envelopeScreen.classList.add("hide");
        inviteScreen.classList.add("show");
    }, 2000);
}

/* CLOSE */
function closeInvite() {
    const envelope = document.getElementById("luxEnvelope");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const inviteScreen = document.getElementById("inviteScreen");

    inviteScreen.classList.remove("show");

    setTimeout(() => {
        envelope.classList.remove("open");
        envelopeScreen.classList.remove("hide");
    }, 800);
}

/* SPARKLES */
function createSparkles() {
    const container = document.getElementById("sparkleContainer");

    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";

        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

/* GOLD CURSOR TRAIL */
document.addEventListener("mousemove", e => {
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 1000);
});

/* COUNTDOWN TIMER */
setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const countdown = document.getElementById("countdown");
    if (countdown) {
        countdown.innerHTML = days + " Days To Go";
    }
}, 1000);
