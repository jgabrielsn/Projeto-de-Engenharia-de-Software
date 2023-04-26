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
  
  
    function updateSaldo() {
      let usuario = JSON.parse(localStorage.getItem("usuario"));
      let email = usuario.user.Email;
      let id = usuario.user.UserID;
      let values = fazGet("https://budget-hwck.onrender.com/users/id/"+id);
    let listValues = JSON.parse(values)
    let saldo = parseFloat(listValues["Saldo"])
      let url2 = "https://budget-hwck.onrender.com/users/saldo/" + id;
      let valor = parseFloat(document.getElementById("valor").value)
      if (saldo === null){
        let saldoFinal = 0 + valor
        body2 = {
          Saldo: saldoFinal,
        }
      
        fazPostSaldo(url2, body2)
      }
      else{
        let saldoFinal = saldo + valor
        body2 = {
          Saldo: saldoFinal,
        }
      
        fazPostSaldo(url2, body2)
      }
    
  }

  function fazGet(url) {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let token = usuario.token;
      let request = new XMLHttpRequest()
      request.open("GET", url, false)
      request.setRequestHeader("Authorization", token);
      request.send()
      return request.responseText
  }
  
