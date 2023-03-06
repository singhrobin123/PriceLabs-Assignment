const fs = require("fs");

function formatDate(date) {
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}/${day}/${year}`;
}

function getDates(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(formatDate(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  dates.push(formatDate(currentDate));
  return dates;
}

function getDayDiff(date) {
  const givenDate = new Date(date);
  const today = new Date();
  const timeDiff = today.getTime() - givenDate.getTime();
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return dayDiff;
}

function generateCsv(data, maxEndDate) {
  const startDate = new Date();
  const endDate = new Date(maxEndDate);
  const dates = getDates(startDate, endDate);

  const csvFormat = ["Unit Id", "Name", ...dates];
  const modifiedData = [csvFormat];

  data.forEach((element) => {
    const { listingId, headline } = element;
    let { beginDate, endDate, rentNights } = element.rateSummary;

    if (!rentNights) rentNights = [];

    if (new Date(beginDate) < new Date()) {
      const dayDiff = getDayDiff(beginDate);
      rentNights = rentNights.slice(dayDiff);
    } else if (new Date(endDate) < new Date()) {
      rentNights = [];
    }

    const row = [listingId, headline, ...rentNights];
    while (row.length < csvFormat.length) {
      row.push(null);
    }
    modifiedData.push(row);
  });

  const csvData = modifiedData.map((row) =>
    row
      .map((field) => {
        if (typeof field === "string" && field.includes(",")) {
          return `"${field}"`;
        } else {
          return field;
        }
      })
      .join(",")
  );

  fs.writeFile("data.csv", csvData.join("\n"), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("CSV file has been created.");
    }
  });
}

module.exports = { generateCsv };
