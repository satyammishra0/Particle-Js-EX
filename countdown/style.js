// var isMobile = window.matchMedia("(max-width: 768px)");

// function handleViewportChange(isMobile) {
//   return isMobile.matches;
// }

// Call the function initially to apply the appropriate changes
// console.log(handleViewportChange(isMobile));

// Add an event listener to handle changes in viewport width
// isMobile.addListener(handleViewportChange);

// 1st method of reverse string
const string = "Hello, World!";
function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(string));

// 2nd method of reverse the string

function reverseString2(str) {
  let reverse = "";

  for (const c of str) {
    reverse = c + reverse;
  }

  return reverse;
}

