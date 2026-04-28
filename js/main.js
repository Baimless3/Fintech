document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav class="p-6 bg-white shadow-sm flex justify-between items-center">
            <a href="index.html" class="text-2xl font-bold text-blue-900 font-serif">FIN-PREMIUM</a>
            <div class="space-x-6 font-semibold text-slate-600">
                <a href="index.html" class="hover:text-blue-600">Start</a>
                <a href="ranking.html" class="hover:text-blue-600">Rankingi</a>
                <a href="kalkulator.html" class="hover:text-blue-600">Kalkulator</a>
            </div>
        </nav>
    `;
    document.body.prepend(header);
});