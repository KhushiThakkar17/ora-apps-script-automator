function onFormSubmit(e) {

  // 1. Get the sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("Form Responses 1");

  // 2. Get the last submitted row
  var lastRow = sheet.getLastRow();
  var data = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];

  // 3. Extract form fields (check your sheet column order!)
  var timestamp = data[0];
  var email     = data[1];  // Email is column B
  var name      = data[2];  // Full Name is column C
  var dept      = data[3];  // Department is column D
  var amount    = data[4];  // Grant Amount is column E
  var desc      = data[5];  // Project Description is column F

  // 4. Set status to "Pending" in column G
  sheet.getRange(lastRow, 7).setValue("Pending");

  // 5. Color the row yellow for Pending
  sheet.getRange(lastRow, 1, 1, 7).setBackground("#FFF9C4");

  // 6. Send confirmation email
  GmailApp.sendEmail(email,
    "Grant Request Received – ORA",
    "Hi " + name + ",\n\n" +
    "We received your grant request for $" + amount + ".\n" +
    "Department: " + dept + "\n\n" +
    "Your request is currently: PENDING REVIEW\n\n" +
    "We will follow up within 5 business days.\n\n" +
    "– Office of Research Administration"
  );
}

function updateStatus(row, newStatus) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("Form Responses 1");

  sheet.getRange(row, 7).setValue(newStatus);

  var color = "#FFF9C4"; // yellow = Pending
  if (newStatus === "In Review") color = "#BBDEFB"; // blue
  if (newStatus === "Approved")  color = "#C8E6C9"; // green
  if (newStatus === "Rejected")  color = "#FFCDD2"; // red

  sheet.getRange(row, 1, 1, 7).setBackground(color);
}
