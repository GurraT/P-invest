const nodes = document.querySelectorAll('.node');
const hexNav = document.querySelectorAll('.top-nav .hex');
const hub = document.getElementById('hubDisplay');

/* NODE INTERACTION */
nodes.forEach(node => {
    node.addEventListener('click', () => {
        // remove active from all
        nodes.forEach(n => n.classList.remove('active'));

        // activate clicked
        node.classList.add('active');

        // update hub text
        const name = node.dataset.name;
        hub.textContent = name;

        // pulse effect
        hub.style.transform = "scale(1.1)";
        setTimeout(() => {
            hub.style.transform = "scale(1)";
        }, 200);
    });
});

/* TOP NAV INTERACTION */
hexNav.forEach(hex => {
    hex.addEventListener('click', () => {
        hexNav.forEach(h => h.classList.remove('active'));
        hex.classList.add('active');

        const name = hex.dataset.name;
        hub.textContent = name;

        glowHub();
    });
});

/* HUB EFFECT */
function glowHub() {
    hub.style.boxShadow = "0 0 40px #0ff, inset 0 0 40px #0ff";
    setTimeout(() => {
        hub.style.boxShadow = "0 0 20px #0ff, inset 0 0 20px #0ff";
    }, 300);
}
