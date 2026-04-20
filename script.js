document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("openBtn");
    const envelopeScreen = document.getElementById("envelopeScreen");
    const inviteScreen = document.getElementById("inviteScreen");

    openBtn.addEventListener("click", function () {
        envelopeScreen.style.display = "none";
        inviteScreen.style.display = "flex";
    });

});
