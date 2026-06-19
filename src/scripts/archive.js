document.addEventListener("click", (event) => {
  const head = event.target.closest(".entry-head");
  if (!head) return;

  const entry = head.closest(".entry");
  if (!entry) return;

  const isOpen = entry.classList.toggle("open");
  head.setAttribute("aria-expanded", String(isOpen));
});
