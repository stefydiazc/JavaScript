$(document).ready(function(){
  $("#mostrar").click(function(evento){
    evento.preventDefault();
    
    var html = '<table border="1"><tbody>';
    html += '<tr><th>Equipos</th>';
        html += '<th>Puntos</th>';
    html += '<th>Total</th></tr>';

    $.getJSON('data.json', function(json){
      $.each(json, function (i, item){
        html += '<tr><th>'+item+'</th><th>'+item+'</th><th>'+item+'</th></tr>';
      });
    });
    
    html += '</tbody></table>';
    $("#donde").html(html);
  });
});