function fazPostGasto(url, body) {
    
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  let token = usuario.token;
 
let request = new XMLHttpRequest();
request.open("POST", url, true);
request.setRequestHeader("Authorization", token);
request.setRequestHeader("Content-type", "application/json");
  
    request.onload = function() {
      if (request.status < 300) {
        const response = JSON.parse(request.responseText);
        window.location.href = "gastocriado.html";   

      } else {
        console.error("Erro ao criar gasto:", request.responseText);
        // ou exibir uma mensagem de erro para o usuário
      }
    };
  
    request.send(JSON.stringify(body));
  }
  
  function gastosUsuario() {
    event.preventDefault();
    let url = "http://budget-env.eba-ik396234.sa-east-1.elasticbeanstalk.com/gastos";
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    const selectElement = document.getElementById("iest");
    const valorSelecionado = selectElement.options[selectElement.selectedIndex].value;
    console.log("Valor selecionado:", valorSelecionado);

    let id = usuario.user.UserID;
    let nome = document.getElementById("nome").value;
    let valorr = document.getElementById("valor").value;
    let dataa = document.getElementById("data").value;
  
    body = {
        UserID: id,
        gastoNome: nome,
        valor: valorr,
        data: dataa,
        categoria: valorSelecionado
    };
  
    fazPostGasto(url, body);
  }
  
      