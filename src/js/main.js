import { fetchSpotPrices, fetchMetalHistory } from "./api.js";
import { displayPrices } from "./ui.js";

const pricesStatus = document.getElementById("prices-status");

async function startApp() {
  try {
    const data = await fetchSpotPrices();
    console.log(data)
    const goldHistory = await fetchMetalHistory("xau");
    const silverHistory = await fetchMetalHistory("silver");

    const goldPoints = goldHistory.points;

    const latestGold = goldPoints[goldPoints.length - 1].c;
    const previousGold = goldPoints[goldPoints.length - 2].c;

    const goldPercentage = (
      ((latestGold - previousGold) / previousGold) *
      100
    ).toFixed(2);
    const goldVariation = (latestGold - previousGold).toFixed(2);

    const silverPoints = silverHistory.points;

    const latestSilver = silverPoints[silverPoints.length - 1].c;
    const previousSilver = silverPoints[silverPoints.length - 2].c;

    const silverPercentage = (
      ((latestSilver - previousSilver) / previousSilver) *
      100
    ).toFixed(2);

    const silverVariation = (latestSilver - previousSilver).toFixed(2);

    displayPrices(
      data,
      goldVariation,
      goldPercentage,
      silverVariation,
      silverPercentage
    );
    console.log("Gold variation:", goldVariation);
    console.log("Gold percentage:", goldPercentage + "%");

    console.log("Silver variation:", silverVariation);
    console.log("Silver percentage:", silverPercentage + "%");
    pricesStatus.textContent = "Les cours sont à jour.";
  } catch (error) {
    pricesStatus.textContent = `Erreur : ${error.message}`;
  }
}
startApp();
