const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/reports",  // ** Path of .json file **//
reportPath: "cypress/reports/cucumber-htmlreport.html",
displayReportTime: true,
displayDuration: true,
metadata: {
    browser: {
        name: "chrome",
        version: "81",
    },
device: "Local test machine",
    platform: {
    name: "windows",
    version: "Catalina",
    },
},
});