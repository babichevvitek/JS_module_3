// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

// const nameLogin = prompt("Введите Логин")
// if (nameLogin === null || nameLogin === "") {
//   alert("Canceled")
// } else if (nameLogin.length < 4) {
//   alert("I don't know any users having name length less than 4 symbols")
// }
// else if (nameLogin !== "User" || nameLogin !== "Admin") {
//   alert("I don’t know you")
// }
// else if (nameLogin === "User" || nameLogin === "Admin") {
//   const password = prompt("Введите пароль")
//   if (password === null || password === "") {
//     alert("Canceled")
//   }
//   else {
//       if (nameLogin === "User" && password === "UserPass") {
       
//         const localTime = new Date().getHours()
//         if (localTime > 5 || localTime < 20) {
//           alert("Good day, dear User!")
//         } else {
//           alert("Good evening, dear User!")
//         }
//       } else if (nameLogin === "Admin" && password === "RootPass") {
//           alert("Wrong password")
//           const localTime = new Date().getHours()
//           if (localTime > 5 || localTime < 20) {
//             alert("Good day, dear Admin!")
//           } else {
//             alert("Good evening, dear Admin!")
//           }
        
//       }  else { alert("Wrong password") }
//     }
// }


// function checkAge(age) {
//   if (age >= 18) { 
//     return  "You are an adult";
//   }

//   return "You are a minor";
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";   
// }

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";    
//   }
//  if (ordered > available) {
//    return "Your order is too large, not enough goods in stock!";   
//   }
//   return "The order is accepted, our manager will contact you";
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length

