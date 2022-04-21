import { Serie } from './serie.js';
import { datosSeries } from './data.js';

let seriesBody: HTMLElement = document.getElementById("programas")!;
let PromedioSeasons: HTMLElement = document.getElementById('seasons-average')!;

CargaSeriesEnTabla(datosSeries);


function CargaSeriesEnTabla(series: Serie[]): void {
    console.log("Cargando información a la tabla");

    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td><b>${serie.index}</b></td>
                             <td><a href="${serie.imageURL}" target="_blank">${serie.nombre}</a></td>
                             <td>${serie.source}</td>
                             <td>${serie.seasons}</td>`;
      seriesBody.appendChild(trElement);
    });
  }
  PromedioSeasons.innerHTML = `Seasons average: ${TotalAvgSeasons(datosSeries)}`

  function TotalAvgSeasons(series: Serie[]): number {
    let avg: number = 0;
    let numSeries: number = 0;
    series.forEach(serie => {
      avg += serie.seasons;
      numSeries += 1;
    })
    return avg/numSeries;
  } 
