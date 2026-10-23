// Q2. Multi-Type Data Summary

// Variables of different data types
let userName = "Jayant";
let age = 21;
let isStudent = true;
let subjects = ["Java", "HTML", "JavaScript"];
let user = { city: "Mathura", course: "B.Tech" };
let middleName = null;
let address; // undefined

// Create a formatted data report
let report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    {
        Label: "Subjects",
        Value: JSON.stringify(subjects),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Middle Name", Value: middleName, Type: "null" },
    { Label: "Address", Value: String(address), Type: typeof address }
];

// Display the report in one table
console.table(report);
