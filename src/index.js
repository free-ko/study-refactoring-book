import statement from "./statement/statement.js";

function fetchInvoices() {
  return new Promise((resolve) => {
    fetch("../data/invoices.json").then((data) => {
      resolve(data.json());
    });
  });
}

function fetchPlays() {
  return new Promise((resolve) => {
    fetch("../data/play.json").then((data) => {
      resolve(data.json());
    });
  });
}

const invoiceData = await fetchInvoices();
const playsData = await fetchPlays();
console.log(statement(invoiceData, playsData));
