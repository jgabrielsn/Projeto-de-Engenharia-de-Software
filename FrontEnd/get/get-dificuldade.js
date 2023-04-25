function fazGet(url) {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let token = usuario.token;
      let request = new XMLHttpRequest()
      request.open("GET", url, false)
      request.setRequestHeader("Authorization", token);
      request.send()
      return request.responseText
  }
  
  function showDica() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let id = usuario.user.UserID;
    let values = fazGet("http://budget-env.eba-ik396234.sa-east-1.elasticbeanstalk.com/users/id/"+id);
    let listValues = JSON.parse(values)
    let objetivo = listValues["Objetivo"]
    if (objetivo === 'op4') {
        window.location.href = "dica4.html";   
    } else if (objetivo === 'op5') {
        window.location.href = "dica5.html";  
    } else if (objetivo === 'op3') {
        window.location.href = "dica3.html";  
    } else if (objetivo === 'op1') {
        window.location.href = "dica1.html";  
    } else if (objetivo === 'op2') {
        window.location.href = "dica2.html";  
    }
}