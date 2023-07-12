let add_btn = document.getElementById("add-btn");
let delete_btn = document.querySelectorAll(".delete-btn");
let list_parent = document.getElementById("list-parent");

function add_list_item() {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = input_field;
  list_parent.appendChild(newDiv);
}

let newDiv = document.createElement("div");
let newLi = document.createElement("li");
let newBtn = document.createElement("button");
let newcheck = document.createElement("div");

add_btn.addEventListener("click", () => {
  let input_field = document.getElementById("input-field");
  newcheck.innerHTML = `<input type="checkbox" onchange="checkfun(e)" id="">`;
  newLi.innerHTML = input_field.value;
  newDiv.appendChild(newcheck);
  newDiv.appendChild(newLi);
  newDiv.appendChild(newBtn);

  newLi.classList.add("list-disc");
  newBtn.innerHTML = "Delete";

  newBtn.classList.add(
    "delete-btn",
    "px-7",
    "py-1",
    "bg-teal-950",
    "text-white",
    "border-2",
    "border-inherit",
    "rounded-sm"
  );
  newDiv.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "gap-6",
    "my-3"
  );
  list_parent.appendChild(newDiv);
});

delete_btn.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.parentElement.remove();
  });
});

function checkfun(e) {
  if (newcheck.checked) {
    console.log("sasasa");
    console.log(e.target.parentElement);
    console.log(newLi);
    newLi.style.textDecoration = "line-through";
  }
}
