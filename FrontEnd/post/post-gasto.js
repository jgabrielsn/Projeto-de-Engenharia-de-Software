/*   const createGasto = async (gasto) => {
    const { UserID, gastoNome, valor, data, categoria } = gasto;

    const query = 'INSERT INTO gastos( UserID, gastoNome, valor, data, categoria) VALUES (?, ?, ?, ?, ?)';
    
    const [createdGasto] = await connection.execute(query, [ UserID, gastoNome, valor, data, categoria]);
    return {insertId : createdGasto.insertId};
};

router.post('/gastos',gastosMiddleware.validateBody, gastoController.createGasto);


*/


function fazPostSaldo(url, body) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
  
    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
      } 
    else {
        console.error("Erro ao fazer login:", request.responseText);
        // ou exibir uma mensagem de erro para o usuário
      }
    };
  
    request.send(JSON.stringify(body));
  }
  
  
  function fazGetSaldo(url) {
      let usuario = JSON.parse(localStorage.getItem("usuario"));
      let token = usuario.token;
        let request = new XMLHttpRequest()
        request.open("GET", url, false)
        request.setRequestHeader("Authorization", token);
        request.send()
        return request.responseText
    }
    
    function updateSaldo() {
      let usuario = JSON.parse(localStorage.getItem("usuario"));
      let id = usuario.user.UserID;
      let email = usuario.user.Email;
      let values = fazGetSaldo("http://localhost:3000/users/"+email);
      let valorr = document.getElementById("valor").value;
      let listValues = JSON.parse(values)
      let saldo = listValues["Saldo"]
      let url2 = "http://localhost:3000/users/saldo/" + id;
      let saldoFinal = saldo - valorr
  
    body2 = {
      Saldo: saldoFinal,
    }
  
    fazPostSaldo(url2, body2)
  }

function fazPostGasto(url, body) {
    
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
  
    request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        const response = JSON.parse(request.responseText);
        updateSaldo();
        window.location.href = "gastocriado.html";   

      } else {
        console.error("Erro ao fazer login:", request.responseText);
        // ou exibir uma mensagem de erro para o usuário
      }
    };
  
    request.send(JSON.stringify(body));
  }
  
  function gastosUsuario() {
    event.preventDefault();
    let url = "http://localhost:3000/gastos";
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
  
      