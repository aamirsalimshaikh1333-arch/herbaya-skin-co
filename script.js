const API_URL = "https://script.google.com/macros/s/AKfycbzf-myM3hrcn55MGGJBA1hvtkGma_puUWxyKCe2Es1qfsro5YrYJi1rvTWeI1-XsEAcnw/exec";

function sendOrderToSheet(data) {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(res => {
    console.log("Saved:", res);
  })
  .catch(err => {
    console.error("Error:", err);
  });
}
