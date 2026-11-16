const pricesContainer = document.getElementById("prices-container");
const lastUpdated = document.getElementById("last-updated");

export function displayPrices(data) {
  const goldCard = document.createElement("div");
  const silverCard = document.createElement("div");

  goldCard.textContent = `Gold : ${data.xau.price} ${data.xau.currency}`;
  silverCard.textContent = `Silver : ${data.silver_usd_oz} USD`;

  pricesContainer.append(goldCard, silverCard);

  const date = new Date(data.updated_at);
  lastUpdated.textContent = date.toLocaleString("fr-MA");
}
