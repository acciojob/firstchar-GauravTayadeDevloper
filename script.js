
function firstChar(text) {
  // Remove leading and trailing spaces
  let v = text.trim();

  // If empty after trimming, return empty string
  if (v.length === 0) {
    return "";
  }

  // Otherwise return first character
  return v[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
