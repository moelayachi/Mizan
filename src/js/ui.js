const pricesContainer = document.getElementById("prices-container");
const lastUpdated = document.getElementById("last-updated");

export function displayPrices(
  data,
  goldVariation,
  goldPercentage,
  silverVariation,
  silverPercentage,
) {
  const metals = transformMetals(data);

 
metals.forEach((metal) => {
  const card = document.createElement("div");

  let variation;
  let percentage;

  if (metal.name === "Gold") {
    variation = goldVariation;
    percentage = goldPercentage;
  } else {
    variation = silverVariation;
    percentage = silverPercentage;
  }

  let arrow;
  let color;

  if (Number(variation) > 0) {
    arrow = "↑";
    color = "green";
  } else if (Number(variation) < 0) {
    arrow = "↓";
    color = "red";
  } else {
    arrow = "→";
    color = "gray";
  }

  card.textContent = `${metal.name} : ${metal.price} ${metal.currency}`;

  const variationInfo = document.createElement("p");
  variationInfo.textContent = `${arrow} Variation : ${variation} | Percentage : ${percentage}%`;
  variationInfo.style.color = color;

  card.appendChild(variationInfo);
  pricesContainer.appendChild(card);
});

  const date = new Date(data.updated_at);
  lastUpdated.textContent = date.toLocaleString("fr-MA");
}

function transformMetals(data) { 
  const metal = [];

  metal.push({
    name: "Gold",
    price: data.xau.price,
    currency: data.xau.currency,
  });
  metal.push({
    name: "Silver", 
    price: data.silver_usd_oz,
    currency: "USD",
  });

  return metal;
}
