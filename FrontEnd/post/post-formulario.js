function fazPostFormulario(url, body) {
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


  function updateFormulario() {
    event.preventDefault();
  
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let id = usuario.user.UserID;
    let saldo = usuario.user.Saldo
    let url = "http://localhost:3000/users/formulario/" + id;
    let url2 = "http://localhost:3000/users/saldo/" + id;
  
    const selectElement = document.getElementById("iest");
    const valorSelecionado = selectElement.options[selectElement.selectedIndex].value;
    console.log("Valor selecionado:", valorSelecionado);

    
    let salarioo = document.getElementById("salario").value;
    body = {
        Salario: salarioo,
        Objetivo: valorSelecionado,
      };
      fazPostFormulario(url, body);

      body2 = {
        Saldo: salarioo,
      }

      fazPostSaldo(url2, body2)
    
  }
  