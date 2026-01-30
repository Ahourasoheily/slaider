const bars = document.getElementById("hum");
const sidebar = document.getElementById("said01");
const closingButton = document.getElementById("xred");


bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
