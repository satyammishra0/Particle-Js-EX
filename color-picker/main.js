let colors = {
  red: [
    "#FF0000",
    "#FF3333",
    "#FF6666",
    "#FF9999",
    "#FFCCCC",
    "#FF6699",
    "#FF3366",
    "#FF0033",
    "#CC0033",
    "#990033",
  ],
  green: [
    "#00FF00",
    "#33FF33",
    "#66FF66",
    "#99FF99",
    "#CCFFCC",
    "#66FF99",
    "#33FF66",
    "#00FF33",
    "#00CC33",
    "#009933",
  ],
  yellow: [
    "#FFFF00",
    "#FFFF33",
    "#FFFF66",
    "#FFFF99",
    "#FFFFCC",
    "#FFCC99",
    "#FF9966",
    "#FF6633",
    "#FF3300",
    "#CC3300",
  ],
  black: [
    "#000000",
    "#111111",
    "#222222",
    "#333333",
    "#444444",
    "#555555",
    "#666666",
    "#777777",
    "#888888",
    "#999999",
  ],
  Gray: [
    "#808080",
    "#999999",
    "#B3B3B3",
    "#CCCCCC",
    "#E6E6E6",
    "#F0F0F0",
    "#F5F5F5",
    "#FAFAFA",
    "#FFFFFF",
    "#DCDCDC",
  ],
};

let totalColorCount = 0;
for (let color in colors) {
  totalColorCount += colors[color].length;
}

let parentDiv = document.getElementById("parent"); 

for (let i = 0; i < totalColorCount; i++) {
  let childDiv = document.createElement("div"); 
  parentDiv.appendChild(childDiv);
  childDiv.setAttribute("class", "childDiv");
  childDiv.setAttribute("id", `childDiv${i}`);
  childDiv.innerHTML = i;
}
console.log(totalColorCount);
