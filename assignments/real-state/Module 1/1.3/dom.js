/*
 * Title: Main Script file
 * Description: A vanilla JS Implementation of costly DOM manipulation vs efficient DOM manipulation
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 07/01/2023
 *
 */

let array = [];
increment = 0;
let container = document.querySelector(".container");

// fast
while (increment < 10000) {
    array.push(++increment);
}

container.innerHTML = array.join(" ");
/**ekhane batch update hocche tai fast , sobgulo operatio ekbare kore niye last akta dom update */

// slow

// while (increment < 10000) {
//     increment++;
//     container.innerHTML += " " + increment;
// }
/** ekhane slow karon proti iteration a DOM k update korte hocche */