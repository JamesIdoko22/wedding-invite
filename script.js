document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.getElementById("luxEnvelope");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const inviteScreen = document.getElementById("inviteScreen");

    envelope.addEventListener("click", function () {

        envelope.classList.add("open");

        setTimeout(() => {
            envelopeScreen.classList.add("hide");
            inviteScreen.classList.add("show");
        }, 1500);

    });

});
