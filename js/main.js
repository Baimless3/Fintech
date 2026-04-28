document.addEventListener("DOMContentLoaded", function() {
    // Tworzymy element <nav>
    const nav = document.createElement('nav');
    
    // Klasy Tailwind dla struktury i układu (Tailwind nadal obsługuje padding/flex)
    // Stylizacja koloru i blur jest w style.css pod selektorem 'nav'
    nav.className = "p-6 flex justify-between items-center z-100";
    
    nav.innerHTML = `
        <a href="index.html" class="text-2xl font-bold text-white font-serif tracking-tight hover:opacity-80 transition-opacity">
            FIN<span class="text-blue-500">-</span>PREMIUM
        </a>
        
        <div class="space-x-6 font-semibold text-slate-300">
            <a href="index.html" class="text-sm uppercase tracking-wider">Start</a>
            <a href="ranking.html" class="text-sm uppercase tracking-wider">Rankingi</a>
            <a href="kalkulator.html" class="text-sm uppercase tracking-wider">Kalkulator</a>
        </div>
    `;
    
    // Wstawiamy nawigację na sam początek <body>
    document.body.prepend(nav);
});
