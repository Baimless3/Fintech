document.addEventListener("DOMContentLoaded", function() {
    const nav = document.createElement('nav');
    nav.className = "p-6 bg-white shadow-md flex justify-between items-center sticky top-0 z-50";
    nav.innerHTML = `
        <a href="index.html" class="text-2xl font-bold text-blue-900 font-serif">FIN-PREMIUM</a>
        <div class="space-x-6 font-semibold text-slate-600">
            <a href="index.html" class="hover:text-blue-600">Start</a>
            <a href="ranking.html" class="hover:text-blue-600">Rankingi</a>
            <a href="kalkulator.html" class="hover:text-blue-600">Kalkulator</a>
        </div>
    `;
    document.body.prepend(nav);
});
