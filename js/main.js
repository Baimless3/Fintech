document.addEventListener("DOMContentLoaded", function() {
    const nav = document.createElement('nav');
    nav.className = "p-6 flex justify-between items-center";
    nav.innerHTML = `
        <a href="index.html" class="text-2xl font-bold text-white font-serif">FIN<span class="text-blue-500">-</span>PREMIUM</a>
        <div class="space-x-6 font-semibold text-slate-300">
            <a href="index.html" class="hover:text-blue-500">START</a>
            <a href="ranking.html" class="hover:text-blue-500">RANKINGI</a>
            <a href="kalkulator.html" class="hover:text-blue-500">KALKULATOR</a>
        </div>
    `;
    document.body.prepend(nav);
});
