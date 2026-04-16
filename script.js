const API_URL = "https://script.google.com/macros/s/AKfycbw6vv5e365uVxkvXlKgb5dOkzhwrf0It51FwOCwbbwrUriaGAGOLGuzhAGrkkaIs-KK/exec";

function sendOrderToSheet(data) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });
}
