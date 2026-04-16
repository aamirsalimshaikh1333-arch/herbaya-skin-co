const API_URL = "https://script.google.com/macros/s/AKfycbzf-myM3hrcn55MGGJBA1hvtkGma_puUWxyKCe2Es1qfsro5YrYJi1rvTWeI1-XsEAcnw/exec";

function trackOrder() {
  const orderId = document.getElementById("orderId").value.trim();
  const resultBox = document.getElementById("result");

  if (!orderId) {
    resultBox.innerHTML = "Please enter Order ID";
    return;
  }

  resultBox.innerHTML = "Checking...";

  fetch(`${API_URL}?orderId=${encodeURIComponent(orderId)}`)
    .then(res => res.json())
    .then(data => {
      if (data.status === "Not Found") {
        resultBox.innerHTML = "Order not found ❌";
      } else {
        resultBox.innerHTML = `
          <p><b>Status:</b> ${data.status}</p>
          <p><b>Name:</b> ${data.name}</p>
          <p><b>Product:</b> ${data.product}</p>
        `;
      }
    })
    .catch(() => {
      resultBox.innerHTML = "Error fetching data";
    });
}

function sendToWhatsApp() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const product = document.getElementById("productName").value.trim();

  if (!name || !phone || !address || !product) {
    alert("Please fill all details first.");
    return;
  }

  const message = `New Order Request:%0A
Name: ${encodeURIComponent(name)}%0A
Phone: ${encodeURIComponent(phone)}%0A
Address: ${encodeURIComponent(address)}%0A
Product: ${encodeURIComponent(product)}`;

  const whatsappURL = `https://wa.me/917507896782?text=${message}`;
  window.open(whatsappURL, "_blank");
}
