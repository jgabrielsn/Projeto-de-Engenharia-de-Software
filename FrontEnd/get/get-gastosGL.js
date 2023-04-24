function fazGet(url) {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let token = usuario.token;
      let request = new XMLHttpRequest()
      request.open("GET", url, false)
      request.setRequestHeader("Authorization", token);
      request.send()
      return request.responseText
  }
  
  function showGastos() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let id = usuario.user.UserID;
    let values = fazGet("http://localhost:3000/users/gastos/"+id);
    let listValues = JSON.parse(values)
    return listValues
  }

  google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var dados = showGastos()        
  var data = google.visualization.arrayToDataTable([
    ['Nome', 'valor'],
    ...dados.map(gasto => [gasto.gastoNome,  Number(gasto.valor.replace(',', '.'))])
  ]);        

  var options = {
    title: 'Gastos',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}