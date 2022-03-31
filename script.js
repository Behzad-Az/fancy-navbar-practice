document.addEventListener("click", e => {
  console.log("i'm here 0");
  if (e.target.matches("a")) {
    e.target.classList.add("active");
    document.querySelectorAll("a").forEach(elem => {
      elem.classList.remove("active");
    });
  }
});