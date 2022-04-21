import { datosSeries } from './data.js';
var seriesBody = document.getElementById("programas");
var PromedioSeasons = document.getElementById('seasons-average');
CargaSeriesEnTabla(datosSeries);
PromedioSeasons.innerHTML = "Seasons average: ".concat(TotalAvgSeasons(datosSeries));

function CargaSeriesEnTabla(series) {
    console.log("Cargando información a la tabla");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.index, "</b></td>\n                             <td><a href=\"").concat(serie.imageURL, "\" target=\"_blank\">").concat(serie.nombre, "</a></td>\n                             <td>").concat(serie.source, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesBody.appendChild(trElement);
    });
}
PromedioSeasons.innerHTML = "Seasons average: ".concat(TotalAvgSeasons(datosSeries));
function TotalAvgSeasons(series) {
    var avg = 0;
    var numSeries = 0;
    series.forEach(function (serie) {
        avg += serie.seasons;
        numSeries += 1;
    });
    return avg / numSeries;
}
