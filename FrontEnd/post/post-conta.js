
function fazPostConta(url, body) {
    
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
  
    request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        const response = JSON.parse(request.responseText);
      } else {
        console.error("Erro ao fazer login:", request.responseText);
        // ou exibir uma mensagem de erro para o usuário
      }
    };
  
    request.send(JSON.stringify(body));
  }
  
  function contasUsuario() {
    event.preventDefault();
    let url = "http://localhost:3000/contas";
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    let id = usuario.user.UserID;
    let nome = document.getElementById("input-new-task").value;
    let valorr = document.getElementById("input-valor").value;
    let venc = document.getElementById("input-vencimento").value;
    let statuss = "aberta"
  
    body = {
        UserID: id,
        contaNome: nome,
        valor: valorr,
        vencimento: venc,
        status: statuss
    };
  
    fazPostConta(url, body);
  }
  
      
