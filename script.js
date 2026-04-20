function openEnvelope() {

    const envelope = document.getElementById("luxEnvelope");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const inviteScreen = document.getElementById("inviteScreen");

    if (!envelope) return;

    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.classList.add("hide");
        inviteScreen.classList.add("show");
    }, 2000);
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
