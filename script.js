// script.js
// integração com API será adicionada no próximo branch
function buscarClima() {
    console.log("em breve...");
}

// script.js
async function buscarClima() {
    const cidade = document.getElementById("city").value;

    // Geocoding: converte nome da cidade em coordenadas
    const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt`
    );
    const geoData = await geoRes.json();

    if (!geoData.results) {
        document.getElementById("resultado").textContent = "Cidade não encontrada.";
        return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    // Busca temperatura atual
    const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    const temp = weatherData.current_weather.temperature;

    document.getElementById("resultado").textContent =
        ` ${name}: ${temp}°C`;
}
