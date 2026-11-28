document.querySelectorAll("[data-like]").forEach(button => {
  button.addEventListener("click", () => {
    const liked = button.getAttribute("aria-pressed") === "true";
    const likes = Number(button.dataset.like) + (liked ? -1 : 1);

    button.dataset.like = likes;
    button.setAttribute("aria-pressed", String(!liked));
    button.textContent = `${liked ? "♡" : "♥"} ${likes}`;
  });
});
