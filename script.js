function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.orderId,
    data.name,
    data.phone,
    data.address,
    data.product,
    data.quantity,
    data.total,
    "Pending"
  ]);

  return ContentService.createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}
