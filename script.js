document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.getElementById("luxEnvelope");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const inviteScreen = document.getElementById("inviteScreen");

    if (!envelope) {
        console.log("Envelope NOT found ❌");
        return;
    }

    console.log("Envelope found ✅");

    envelope.addEventListener("click", function () {

        console.log("Envelope clicked ✅");

        envelope.classList.add("open");

        setTimeout(() => {
            envelopeScreen.classList.add("hide");
            inviteScreen.classList.add("show");
        }, 2000);

    });

});
