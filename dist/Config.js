/**
 * Configuration for Gmail2GDrive
 * See https://github.com/ahochsteger/gmail2gdrive/blob/master/README.md for a config reference
 */
function getGmail2GDriveConfig() {
  return {
    // Global filter
    "globalFilter": "has:attachment -in:trash -in:drafts -in:spam",
    // Gmail label for processed threads (will be created, if not existing):
    "processedLabel": "to-gdrive/processed",
    // Sleep time in milli seconds between processed messages:
    "sleepTime": 100,
    // Maximum script runtime in seconds (google scripts will be killed after 5 minutes):
    "maxRuntime": 280,
    // Only process message newer than (leave empty for no restriction; use d, m and y for day, month and year):
    "newerThan": "3y",
    // Timezone for date/time operations:
    "timezone": "GMT",
    // Processing rules:
    "rules": [
      { // Store all montly costs attachments sent to infothecast@gmail.com to the drive folder "Attachments"
        "filter": "label:sabine-cast-steuer-monthly-costs ",
        "folder": "'Attachments/MonthlyCosts/'yyyy-MM"
      },
      { // Store all travel costs attachments sent to infothecast@gmail.com to the drive folder "Attachments"
        "filter": "label:sabine-cast-steuer-travel-costs  ",
        "folder": "'Attachments/TravelCosts/'yyyy-MM"
      },
    ]
  };
}