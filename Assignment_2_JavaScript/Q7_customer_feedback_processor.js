// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.trim().split(/\s+/).length;
const lowerFeedback = feedback.toLowerCase();

// Check for negative words without case sensitivity.
const hasNegativeWord = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasNegativeWord) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
