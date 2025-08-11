function temaDegistir() {
    const html = document.documentElement;
    const aktifTema = html.getAttribute('tema');
    const yeniTema = aktifTema === 'koyu' ? 'acik' : 'koyu';
    const tooltip = document.querySelector('.tema-degistir .nav-tooltip');
    
    html.setAttribute('tema', yeniTema);
    localStorage.setItem('tema', yeniTema);
    tooltip.textContent = yeniTema === 'koyu' ? 'Koyu Mod' : 'Açık Mod';
}

document.addEventListener('DOMContentLoaded', () => {
    const kayitliTema = localStorage.getItem('tema') || 'acik';
    const tooltip = document.querySelector('.tema-degistir .nav-tooltip');

    document.documentElement.setAttribute('tema', kayitliTema);
    tooltip.textContent = kayitliTema === 'koyu' ? 'Koyu Mod' : 'Açık Mod';
    
    document.body.classList.add('loaded');
    
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const temaDegistirBtn = document.querySelector('.tema-degistir');
    if (temaDegistirBtn) {
        temaDegistirBtn.addEventListener('click', (e) => {
            e.preventDefault();
            temaDegistir();
        });
    }
});

window.addEventListener('load', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        nav.style.transform = 'translateX(-50%) translateZ(0)';
    }
    
    document.body.style.opacity = '1';
});