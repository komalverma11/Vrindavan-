
  const searchBar = document.getElementById("searchBar");
  const templeCards = document.querySelectorAll(".temple-card");

  searchBar.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    templeCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(query) || description.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
