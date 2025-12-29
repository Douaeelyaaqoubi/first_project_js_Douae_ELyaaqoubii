// !- Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.


    let users = [];
    let currentUser = null;
    class User {
    constructor(name, email, age, password, balance) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        this.balance = balance;
        this.loan = 0;
        this.investment = 0;
        this.history = [];
    }
    }


let choice = prompt("Choose:Sign Up, Login, Change Password, exit" )

while (choice) {
    if (formatName(choice) === "Exit") {
        break;
    } 
    else if (formatName(choice) === "Sign Up") {
        while (signUp() === false) {
            signUp()
        }
    } else if (formatName(choice) === "Login") {
        login();
    } else if (formatName(choice) === "Change Password") {
        changePassword();
    } else {
        alert("You must choose only one of these options.")
    }
    
    choice = prompt("Choose: Sign Up, Login, Change Password, Exit");
}


alert(formatName(choice));

// # Name (Full):
//             -Check for leading or trailing spaces. 
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.



// ?Fonction ////////////////////////////////////////////////////////////////////////////
// trim : remov espace
// split : kt9sm
// some : ktserchi 

function formatWord(x) {
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}

function formatName(name) {
    return name
        .toLowerCase()
        .split(" ")
        .filter(w => w !== "")
        .map(formatWord)
        .join(" ");
}

function signUp() {
    
    let urname = prompt("Enter full name:");
    if ( !urname || urname.trim().length < 5 || ([...urname].some( c => !((c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || c === " " )))  ){
        alert("Invalid name , Name must be at least 5 letters and contain only letters and spaces.");
    } else {
        alert("Name accepted: " + formatName(urname));
    }
    urname = formatName(urname);

    let email = prompt("Enter email:");
    if (!email || email.includes(" ") || email.trim().length < 10 || email.split("@").length !== 2 || users.some(u => u.email === email.toLowerCase())) {
        alert("Invalid or existing email");
        return false;
    }
    // reverse to lowercase
    email = email.toLowerCase().trim(); 

    let age = prompt("Enter age:");
    if (!age || isNaN(age) || age.length >= 3 ) {
        alert("Invalid age");
        return false;
    }
}







//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.






//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.