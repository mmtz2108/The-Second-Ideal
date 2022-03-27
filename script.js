const h2 = document.createElement("h2");
h2.textContent = "I am struggling with JavaScript but learning as I go. Bear with me.";
document.querySelector("body").appendChild(h2);

const Marcos = document.getElementById('Marcos');
Marcos.addEventListener('click', function() {
  alert(`How often do you click on strangers' faces?`);
});