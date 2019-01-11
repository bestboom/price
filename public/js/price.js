$(document).ready(function(){
  setInterval(function(){
    $.getJSON("https://api.coincap.io/v2/assets/tron", function(result){
        var price = result.data['priceUsd'];
        var inputvalue = $('#trx_input').val();
      console.log(inputvalue);
        $('#name').html(result.data['id']);
        $('#price').html('$' + parseFloat(price).toFixed(6));
        $('#change').html('(' + (parseFloat(result.data['changePercent24Hr']).toFixed(2)) + '%)');
        $('#rank').html(result.data['rank']);
        $('#cap').html('$' + ((result.data['marketCapUsd'])/1000000000).toFixed(2) + 'B');
        $('#volumetoday').html('$' + ((result.data['volumeUsd24Hr'])/1000000).toFixed(2) + 'M');
        $('#supply').html(((result.data['supply'])/1000000000).toFixed(2) + 'B TRX' );
        $('#usd_price').val((inputvalue * price).toFixed(6));
    });
  }, 1000);
});
