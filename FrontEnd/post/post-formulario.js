function fazPostFormulario(url, body) {
  let usuario = JSON.parse(localStorage.getItem("usuario"));
    let token = usuario.token;
    
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Authorization", token);
    request.setRequestHeader("Content-type", "application/json");
  
    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        window.location.href = "home.html";   
     } 
    else {
        console.error("Erro ao atualizar informações:", request.responseText);
        // ou exibir uma mensagem de erro para o usuário
      }
    };
  
    request.send(JSON.stringify(body));
  }
  


function fazPostSaldo(url, body) {
  let usuario = JSON.parse(localStorage.getItem("usuario"));
    let token = usuario.token;
   
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
   request.setRequestHeader("Authorization", token);
  request.setRequestHeader("Content-type", "application/json");

  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      window.location.href = "home.html";   
    } 
  else {
      console.error("Erro ao atualizar saldo:", request.responseText);
      // ou exibir uma mensagem de erro para o usuário
    }
  };

  request.send(JSON.stringify(body));
}

function fazPostMeta(url, body) {
  let usuario = JSON.parse(localStorage.getItem("usuario"));
    let token = usuario.token;
   
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Authorization", token);
  request.setRequestHeader("Content-type", "application/json");

  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      window.location.href = "home.html";   
    } 
  else {
      console.error("Erro ao atualizar informações:", request.responseText);
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
    let url = "http://budget-env.eba-ik396234.sa-east-1.elasticbeanstalk.com/users/formulario/" + id;
    let url2 = "http://budget-env.eba-ik396234.sa-east-1.elasticbeanstalk.com/users/saldo/" + id;
    let url3 = "http://budget-env.eba-ik396234.sa-east-1.elasticbeanstalk.com/users/meta/" + id
    let metaa = document.getElementById("meta").value;
  
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
    
      body3 = {
        Meta: metaa

      }
    fazPostMeta(url3, body3)
  }
  