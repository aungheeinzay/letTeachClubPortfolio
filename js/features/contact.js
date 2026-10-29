import { getFieldError } from "../utils/validation.js";

export function initContactForm() {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  const counter = document.querySelector("#message-count");
  const fields = ["name", "email", "message"].map((id) =>
    document.getElementById(id),
  );

  function validate(field) {
    const error = getFieldError(field);
    document.getElementById(`${field.id}-error`).textContent = error;
    field.setAttribute("aria-invalid", String(Boolean(error)));
    return !error;
  }

  fields.forEach((field) => {
    field.addEventListener("input", () => {
      status.textContent = "";
      if (field.id === "message") {
        counter.textContent = `${field.value.trim().length} / 500`;
      }
      if (field.getAttribute("aria-invalid") === "true") validate(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const invalid = fields.filter((field) => !validate(field));
    if (invalid.length) {
      status.textContent = "Please correct the highlighted fields.";
      invalid[0].focus();
      return;
    }
    status.textContent = "Demo only. Your message has not been sent.";
  });
}
