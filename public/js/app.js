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



// # Name (Full) & email &  age & password & password_confirmed:


// ?Fonction ////////////////////////////////////////////////////////////////////////////
// trim : remov espace
// split : kt9sm
// some : ktserchi 

function formatWord(x) {
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}

function formatName(name) {
    let words = name.toLowerCase().split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            let word =
                words[i][0].toUpperCase() +
                words[i].slice(1);
            result.push(word);
        }
    }

    return result.join(" ");
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

    let age = prompt("Enter age:");
    if (!age || isNaN(age) || age.length >= 3 ) {
        alert("Invalid age");
        return false;
    }

    let password = prompt("Enter password:");
    if (!password || password.includes(" ") || password.length < 7 || !["@","#","-","+","*","/"].some(s => password.includes(s))){
        alert("Invalid password");
        return false;
    }
    

    let password_confirmed = prompt("Confirm password:");
    if (password !== password_confirmed) {
        alert("Passwords do not match");
        return false;
    }

    let user = new User(urname, email, age, password, 0);
    users.push(user);

    alert("Account created successfully");
    return true;

}









//         * If the user chooses to log in, here are the details they must enter:
function login() {
    let email = prompt("Enter email:");
    if (!email) {
        alert("Email is required");
        return
    }

    let user = users.find(u => u.email === email);

    if (!user) {
        alert("Email not found");
        return false;
    }

    let password = prompt("Enter password:");
    if (password !== user.password) {
        alert("Incorrect password");
        return false;
    }

    currentUser = user;
    alert("Welcome " + user.name);
    return true;
}


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