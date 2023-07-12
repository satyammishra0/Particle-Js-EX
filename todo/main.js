let input_field = document.getElementById("input-field").value;
let add_btn = document.getElementById("add-btn");
let delete_btn = document.querySelectorAll(".delete-btn");
let list_parent = document.getElementById("list-parent");

function add_list_item() {}

add_btn.addEventListener("click", add_list_item);

delete_btn.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.remove();
  });
});
