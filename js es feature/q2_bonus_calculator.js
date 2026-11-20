"use strict"; // no implicit globals: every variable below is declared with const/let
// Q2 – Employee Bonus Calculator
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  // extra bad records to demonstrate try...catch
  { name: "Ravi", salary: "abc", years: "4" }, // conversion error
  { name: "Neha", years: "3" }                 // missing property
];

function calculateBonus(emp) {
  if (!("salary" in emp) || !("years" in emp)) {
    throw new Error(`Missing property for ${emp.name}: salary/years required`);
  }
  const salary = Number(emp.salary);
  const years = Number(emp.years);
  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Cannot convert salary/years to number for ${emp.name}`);
  }
  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { name: emp.name, salary, years, bonus };
}

for (const emp of employees) {
  try {
    const r = calculateBonus(emp);
    console.log(`Employee: ${r.name.padEnd(6)} | Salary: ₹${r.salary.toLocaleString("en-IN")} | Years: ${r.years} | Bonus: ₹${r.bonus.toLocaleString("en-IN")}`);
  } catch (err) {
    console.log(`ERROR (${err.name}): ${err.message}`);
  }
}
