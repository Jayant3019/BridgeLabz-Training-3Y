// Q5. Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // All four conditions must be true for the home to be secure.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // OR (||) and NOT (!) check whether any entry point is unsecured.
    const hasUnsecuredEntry = !isDoorLocked || !isWindowClosed;

    console.log(`Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`);
    console.log(isSecure ? "Secure" : "Unsafe");
    console.log(`Unsecured entry detected: ${hasUnsecuredEntry}`);
    console.log("------------------------------");
}

// Test multiple combinations.
checkSecurity(true, true, true, true);   // Secure
checkSecurity(true, true, false, true);  // Unsafe: alarm is off
checkSecurity(true, false, true, true);  // Unsafe: window is open
checkSecurity(true, true, true, false);  // Unsafe: owner is outside
