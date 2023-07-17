let type_box = document.getElementById("type-box");
let word_count = document.getElementById("word-count");
let letter_count = document.getElementById("letter-count");
let space_count = document.getElementById("space-count");

type_box.addEventListener("keyup", (e) => {
  let typed_letter = e.key.length + 1;
  word_count.innerHTML = typed_letter;
});
