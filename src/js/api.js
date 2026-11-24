const API_URL = "https://xaus.com/api/v1/spot";

export async function fetchSpotPrices() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("HTTP error :" + response.status);
  }
  const data = await response.json();
  return data;
}
export async function fetchMetalHistory(symbol) {
  const url = `https://xaus.com/api/v1/chart?symbol=${symbol}&range=1d&interval=5m`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("HTTP error :" + response.status);
  }
  const data = await response.json();
  return data;
}
