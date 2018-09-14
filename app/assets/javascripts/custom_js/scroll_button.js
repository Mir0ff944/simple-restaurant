window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  var button = document.getElementById("back-to-top-btn")
  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}