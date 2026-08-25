const map = L.map('mapa-interativo').setView([-23.5505, -46.6333], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([-23.5505, -46.6333])
    .addTo(map)
    .bindPopup("Ponto de distribuição de alimentos");
    // O L vem do Leaflet.
    // praticamente é Crie um marcador nessa coordenada e coloque-o no meu mapa.

    