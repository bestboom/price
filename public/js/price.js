$(document).ready(function(){
  setInterval(function(){
    $.getJSON("https://api.coincap.io/v2/assets/tron", function(result){
      
        
        var price = result.data['priceUsd'];
        $('#name').html(result.data['id']);
        $('#price').html('$' + parseFloat(price).toFixed(6));
        $('#change').html('(' + (parseFloat(result.data['changePercent24Hr']).toFixed(2)) + '%)');
        $('#rank').html(result.data['rank']);
      $('#cap').html(result.data['marketCapUsd']);
      $('#volumetoday').html(result.data['volumeUsd24Hr']);
      $('#supply).html(result.data['supply']);
      $('#maxsupply').html(result.data['maxSupply']);
    });
  }, 1000);
});
