function openEnvelope() {
    const envelopeScreen = document.getElementById('envelopeScreen');
    const inviteScreen = document.getElementById('inviteScreen');

    envelopeScreen.classList.add('hide');

    setTimeout(() => {
        inviteScreen.classList.add('show');
    }, 600);
}

function closeInvite() {
    const envelopeScreen = document.getElementById('envelopeScreen');
    const inviteScreen = document.getElementById('inviteScreen');

    inviteScreen.classList.remove('show');

    setTimeout(() => {
        envelopeScreen.classList.remove('hide');
    }, 600);
}
