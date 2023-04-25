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
    let values = fazGet("http://budget-env.eba-ik396234.sa-east-1.elasticbeanstalk.com/users/id/"+id);
    let listValues = JSON.parse(values)
    let saldo = listValues["Saldo"]
    return saldo
  }