
let marksPercentage = 88;      
let familyIncome = 280000;    


let scholarshipStatus;

if (marksPercentage >= 85 && familyIncome < 300000) {
    scholarshipStatus = "Full Scholarship";
} else if (marksPercentage >= 70 && familyIncome < 500000) {
    scholarshipStatus = "Half Scholarship";
} else {
    scholarshipStatus = "Not eligible for scholarship";
}


console.log("Marks Percentage: " + marksPercentage + "%");
console.log("Family Income: ₹" + familyIncome);
console.log("Scholarship Status: " + scholarshipStatus);
