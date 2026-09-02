const seal = document.getElementById('seal');
const flap = document.getElementById('flap');
const letter = document.getElementById('letter');

seal.addEventListener('click', () => {
    // 1. Mührü erit
    gsap.to(seal, { opacity: 0, duration: 0.3 });
    
    // 2. Kapağı arkaya doğru aç
    gsap.to(flap, { rotationX: 180, duration: 1, ease: "power2.inOut" });
    
    // 3. Kapağın z-index'ini düşür (Kartın arkasında kalması için)
    gsap.to(flap, { zIndex: 1, delay: 0.5 });

    // 4. Kartı zarfın içinden pürüzsüzce çıkar
    gsap.to(letter, { 
        y: -140, 
        duration: 1.2, 
        delay: 0.8, 
        ease: "power2.out",
        onComplete: () => {
            // Zarfı aşağı indirip mektuba odaklan
            gsap.to('.envelope-container', { y: 50, duration: 1, ease: "power2.out" });
            
            // Kullanıcının aşağı kaydırmasına izin ver
            document.body.style.overflowY = "auto";
            
            // Alt kısımdaki içerikleri yumuşakça görünür hale getir
            gsap.to('#content', { opacity: 1, duration: 1.5, ease: "power2.inOut" });
        }
    });
});