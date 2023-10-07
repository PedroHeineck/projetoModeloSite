document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var telefone = document.getElementById("telefone").value;

  alert("Registro bem sucedido!");
  document.getElementById("registerForm").reset();
});
