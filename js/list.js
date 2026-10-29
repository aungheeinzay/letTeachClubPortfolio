"use strict";
const form = document.querySelector("#task-form"),
  input = document.querySelector("#task"),
  list = document.querySelector("#tasks"),
  status = document.querySelector("#list-status");
function count() {
  status.textContent = list.children.length + " task(s) in your list.";
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) {
    status.textContent = "Enter a task first.";
    input.focus();
    return;
  }
  const row = document.createElement("li"),
    check = document.createElement("input"),
    label = document.createElement("span"),
    remove = document.createElement("button");
  check.type = "checkbox";
  check.setAttribute("aria-label", "Mark " + text + " complete");
  label.textContent = text;
  remove.textContent = "Remove";
  remove.setAttribute("aria-label", "Remove " + text);
  check.addEventListener("change", () =>
    label.classList.toggle("done", check.checked),
  );
  remove.addEventListener("click", () => {
    row.remove();
    count();
    input.focus();
  });
  row.append(check, label, remove);
  list.append(row);
  input.value = "";
  count();
  input.focus();
});
