function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const envelopeScreen = document.getElementById('envelopeScreen');
    const inviteScreen = document.getElementById('inviteScreen');
    
    // Add open class to envelope (triggers animation)
    envelope.classList.add('open');
    
    // After envelope opens, show invitation
    setTimeout(() => {
        envelopeScreen.classList.add('hide');
        inviteScreen.classList.add('show');
    }, 1400);
}

function closeInvite() {
    const envelope = document.getElementById('envelope');
    const envelopeScreen = document.getElementById('envelopeScreen');
    const inviteScreen = document.getElementById('inviteScreen');
    
    inviteScreen.classList.remove('show');
    
    setTimeout(() => {
        envelopeScreen.classList.remove('hide');
        envelope.classList.remove('open');
    }, 600);
}

// Add gentle parallax effect on mouse move (desktop only)
if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('mousemove', (e) => {
        const envelope = document.getElementById('envelope');
        if (envelope && !envelope.classList.contains('open')) {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            envelope.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
}
