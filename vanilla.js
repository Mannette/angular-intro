var text = document.getElementById('name');
var button = document.getElementById('button');
var header = document.getElementById('text');

button.addEventListener('click', function(e) {
  e.preventDefault();
  header.innerText = header.innerText += " " + text.value;
});
