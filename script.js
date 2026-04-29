const faqButtons = document.querySelectorAll(".faq-button");

faqButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const targetId = event.currentTarget.getAttribute("aria-controls");
    const answer = document.getElementById(targetId);

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const newExpanded = !isExpanded;

    button.setAttribute("aria-expanded", String(newExpanded));
    answer.hidden = !newExpanded;
    const icon = button.querySelector(".faq-icon");

    icon.src = newExpanded
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";
  });
});