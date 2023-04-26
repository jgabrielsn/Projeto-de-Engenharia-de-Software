function fazGet(url) {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let token = usuario.token;
      let request = new XMLHttpRequest()
      request.open("GET", url, false)
      request.setRequestHeader("Authorization", token);
      request.send()
      return request.responseText
  }
  
  function showSaldo() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let id = usuario.user.UserID;
    let values = fazGet("https://budget-hwck.onrender.com/users/id/"+id);
    let listValues = JSON.parse(values)
    let saldo = listValues["Saldo"]
    return saldo
  }