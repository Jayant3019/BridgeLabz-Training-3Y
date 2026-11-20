"use strict";
// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];   // entries that are real, usable numbers
const invalidEntries = []; // entries that must be skipped (logged separately)

// Debug observation: Number(" ") is 0 and Number(null) is 0 (not NaN!), so checking
// isNaN alone would wrongly accept them. We add explicit checks for those cases.
function isValidNumber(value) {
  if (value === null || value === undefined) return false;           // missing data
  if (typeof value === "string" && value.trim() === "") return false; // blank string -> 0 trap
  return !Number.isNaN(Number(value));
}

console.log("===== Q1 REPORT =====");
for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const asNumber = Number(raw);   // Number("100px") -> NaN, Number(undefined) -> NaN
  const asBoolean = Boolean(raw); // any non-empty string is true (even "false"!); " " is true too
  const asString = String(raw);   // String(null) -> "null", String(undefined) -> "undefined"
  const ok = isValidNumber(raw);

  console.log(`[${i}] raw=${JSON.stringify(raw)} | Number=${asNumber} | Boolean=${asBoolean} | String="${asString}" | ${ok ? "VALID" : "INVALID (skipped)"}`);

  if (ok) validNumbers.push(asNumber);
  else invalidEntries.push(raw);
}

console.log("\n--- Summary ---");
console.log("Valid numeric data   :", validNumbers);
console.log("Invalid data         :", invalidEntries);
console.log(`Valid count = ${validNumbers.length}, Invalid count = ${invalidEntries.length}`);
const sum = validNumbers.reduce((a, b) => a + b, 0);
console.log(`Sum of valid numbers = ${sum}`);
