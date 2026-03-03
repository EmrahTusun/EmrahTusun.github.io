function modalAc(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    }
}

function modalKapat(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-arkaplan')) {
        event.target.style.display = "none";
        document.body.style.overflow = 'auto';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const animasyonluMetinler = document.querySelectorAll('.animasyonlu-metin');
    animasyonluMetinler.forEach((oge, i) => {
        oge.style.opacity = '0';
        oge.style.transform = 'translateY(30px)';
        setTimeout(() => {
            oge.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
            oge.style.opacity = '1';
            oge.style.transform = 'translateY(0)';
        }, 150 + (i * 150)); 
    });
    const kartlar = document.querySelectorAll('.kaydirma-animasyonu');
    const gozlemci = new IntersectionObserver((girdiler) => {
        girdiler.forEach((girdi) => {
            if (girdi.isIntersecting) {
                girdi.target.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
                girdi.target.style.opacity = '1';
                girdi.target.style.transform = 'translateY(0)';
                gozlemci.unobserve(girdi.target);
            }
        });
    }, { threshold: 0.1 });

    kartlar.forEach((kart) => {
        kart.style.opacity = '0';
        kart.style.transform = 'translateY(50px)';
        gozlemci.observe(kart);
    });
});