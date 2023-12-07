const list = document.querySelectorAll(".list")
function activelink() {
  list.forEach((item) => item.classList.remove("active"))
  this.classList.add("active")
}
list.forEach((item) => item.addEventListener("click", activelink))


function toggleSection(showId, hideId) {
  // Mostra a seção clicada
  var showSection = document.getElementById(showId);
  showSection.classList.remove('hidden');

  // Oculta a outra seção
  var hideSection = document.getElementById(hideId);
  hideSection.classList.add('hidden');

}