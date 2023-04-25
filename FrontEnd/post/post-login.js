
function fazPostLogin(url, body) {
    
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
  
    request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        const response = JSON.parse(request.responseText);
        const token = response.user.UserID;
        const usuario = response;
        salvaUsuarioNoLocalStorage(usuario);
        window.location.href = "home.html";
      } else {
        console.error("Erro ao fazer login:", request.responseText);
        // ou exibir uma mensagem de erro para o usuário
      }
    };
  
    request.send(JSON.stringify(body));
  }
  
  function loginUsuario() {
    event.preventDefault();
    let url = "http://budget-env.eba-ik396234.sa-east-1.elasticbeanstalk.com/login";
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    body = {
      Email: email,
      Password: password,
    };
  
    fazPostLogin(url, body);
  }
  
  function salvaUsuarioNoLocalStorage(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  