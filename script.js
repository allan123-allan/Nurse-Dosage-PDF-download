
document.getElementById("searchInput").addEventListener("input", function () {
  let filter = this.value.toLowerCase();
  let items = document.querySelectorAll(".pdf-item");

  items.forEach(function (item) {
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
});
