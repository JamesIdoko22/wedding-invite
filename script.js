function openEnvelope() {

    const envelope = document.getElementById("luxEnvelope");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const inviteScreen = document.getElementById("inviteScreen");
    const music = document.getElementById("bgMusic");

    // Play music
    music.volume = 0.5;
    music.play();

    // Open flap
    envelope.classList.add("open");

    // Sparkle explosion
    createSparkles();

    // Transition after animation
    setTimeout(() => {
        envelopeScreen.classList.add("hide");
        inviteScreen.classList.add("show");
    }, 1600);
}

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

function createSparkles() {
    const container = document.getElementById("sparkleContainer");

    for (let i = 0; i < 40; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";

        container.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
}
