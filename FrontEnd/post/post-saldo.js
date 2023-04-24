function fazPostSaldo(url, body) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
  
    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        window.location.href = "home.html";   

      } 
    else {
        console.error("Erro ao fazer login:", request.responseText);
        // ou exibir uma mensagem de erro para o usuário
      }
    };
  
    request.send(JSON.stringify(body));
  }
  
  
    function updateSaldo() {
      let usuario = JSON.parse(localStorage.getItem("usuario"));
      let id = usuario.user.UserID;
      let url2 = "http://localhost:3000/users/saldo/" + id;
      let valor = document.getElementById("valor").value
  
    body2 = {
      Saldo: valor,
    }
  
    fazPostSaldo(url2, body2)
  }