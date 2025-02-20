// JavaScript for Anime Meme Coin
const coinValueElement = document.getElementById("coinValue");
const claimButton = document.getElementById("claimButton");

let coinValue = 0;

// Function to update coin value
function updateCoinValue() {
  coinValue += Math.floor(Math.random() * 100) + 1; // Random coin value increase
  coinValueElement.textContent = coinValue;
}

// Event listener for the claim button
claimButton.addEventListener("click", () => {
  updateCoinValue();
  alert(`You claimed ${coinValue} Anime Meme Coins! 🎉`);
});