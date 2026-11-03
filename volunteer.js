// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");


const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const interestInput = document.querySelector("#interest");
const result = document.querySelector("#result");
const form = document.querySelector("#volunteerForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submit event listener added.");
    const name = nameInput.value;
    const email = emailInput.value;
    const interest = interestInput.value;

    if (!name && !email && !interest) {
        result.textContent = "Error: Please fill in all fields.";
        result.style.color = "red";
    }else if (!name) {
        result.textContent = "Error: Name is missing.";
        result.style.color = "red";
    } else if (!email) {
        result.textContent = "Error: Email is missing.";
        result.style.color = "red";
    } else if (!interest) {
        result.textContent = "Error: Interest is missing.";
        result.style.color = "red";
    } else if (interest === "outreach") {
        result.textContent = `Thank you, ${name}, for your interest in ${interest}! We hope you have a nice time meeting people.`;
        result.style.color = "green";
    }else if (interest === "events") {
        result.textContent = `Thank you, ${name}, for your interest in ${interest}! we think you will be a great help for the events!`;
        result.style.color = "green";
    } else {
        result.textContent = `Thank you, ${name}, for your interest in ${interest}! We hope you you have a great time mentoring!`;
        result.style.color = "green";
    }
});
// TODO: Select the form, email input, and interest dropdown.

// TODO: Add a submit event listener to the form.

// TODO: Prevent the default form submission.

// TODO: Read the input values and check for missing information.

// TODO: Display helpful errors or an interest-specific response.