document.addEventListener('DOMContentLoaded', function() {
    const projeKartlari = document.querySelectorAll('.proje-kart');
    
    projeKartlari.forEach(kart => {
        const linkler = kart.querySelectorAll('.linkler a');
        
        linkler.forEach(link => {
            link.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    });
});
