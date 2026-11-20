"use strict";
// Q3 – Transaction Validator
const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];

class NegativeAmountError extends Error { constructor(m) { super(m); this.name = "NegativeAmountError"; } }
class MissingFieldError extends Error { constructor(m) { super(m); this.name = "MissingFieldError"; } }
class NullEntryError extends Error { constructor(m) { super(m); this.name = "NullEntryError"; } }

function validate(tx) {
  if (tx === null) throw new NullEntryError("Transaction is null");       // check null FIRST, otherwise tx.id throws TypeError
  if (tx.id === undefined || tx.amount === undefined) {
    throw new MissingFieldError(`Transaction ${tx.id ?? "?"} is missing id or amount`);
  }
  if (tx.amount < 0) throw new NegativeAmountError(`Transaction ${tx.id} has negative amount ${tx.amount}`);
  return tx;
}

const valid = [];
const invalid = { NegativeAmountError: [], MissingFieldError: [], NullEntryError: [], Other: [] }; // errors categorised by type

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  // BREAKPOINT: click the gutter next to the line below (or uncomment `debugger;`)
  // and add Watch: i, tx, valid, invalid. Step with F10 / F11.
  // debugger;
  try {
    valid.push(validate(tx));
    console.log(`[${i}] OK`);
  } catch (err) {
    (invalid[err.name] || invalid.Other).push(err.message);
    console.log(`[${i}] FAILED -> ${err.name}: ${err.message}`);
  }
}

const failedCount = Object.values(invalid).reduce((n, a) => n + a.length, 0);
console.log("\n===== FINAL REPORT =====");
console.log("Valid transactions:", valid);
console.log("Invalid transactions by type:", invalid);
console.log(`Successful: ${valid.length} | Failed: ${failedCount} | Total: ${transactions.length}`);
