const list = document.querySelectorAll(".list")
function activelink() {
  list.forEach((item) => item.classList.remove("active"))
  this.classList.add("active")
}
list.forEach((item) => item.addEventListener("click", activelink))

function toggleSection(showId, hideId1, hideId2, hideId3) {
  // Mostra a seção clicada
  var showSection = document.getElementById(showId)
  showSection.classList.remove("hidden")

  // Oculta as outras seções
  var hideSection1 = document.getElementById(hideId1)
  hideSection1.classList.add("hidden")

  var hideSection2 = document.getElementById(hideId2)
  hideSection2.classList.add("hidden")

  var hideSection3 = document.getElementById(hideId3)
  hideSection3.classList.add("hidden")

  console.log("Show:", showId)
  console.log("Hide 1:", hideId1)
  console.log("Hide 2:", hideId2)
  console.log("Hide 3:", hideId3)
}
