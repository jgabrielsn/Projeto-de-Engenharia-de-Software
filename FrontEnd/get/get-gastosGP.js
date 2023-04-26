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
    let values = fazGet("https://budget-hwck.onrender.com/users/gastos/"+id);
    let listValues = JSON.parse(values)
    return listValues
  }

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var dados = showGastos()        
  if (dados.length === 0) {
    // Não há dados para exibir, faça algo aqui, como exibir uma mensagem de erro
    return;
  }
  var categorias = {};
  dados.forEach(function(gasto) {
    if (categorias[gasto.categoria] === undefined) {
      categorias[gasto.categoria] = 0;
    }
    categorias[gasto.categoria] += Number(gasto.valor.replace(',', '.'));
  });
  
  // Crie uma nova matriz de dados com os valores agregados
  var data = [['Categoria', 'Valor']];
  for (var categoria in categorias) {
    data.push([categoria, categorias[categoria]]);
  }      

  var options = {
    title: 'Divisão dos gastos'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  var dataTable = google.visualization.arrayToDataTable(data);
  chart.draw(dataTable, options);
  
}