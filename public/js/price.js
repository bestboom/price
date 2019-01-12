$(document).ready(function(){
  setInterval(function(){
    $.getJSON("https://api.coincap.io/v2/assets/tron", function(result){
        var price = result.data['priceUsd'];
        var inputvalue = $('#trx_input').val();

        $(title).html(price);
        $('#name').html(result.data['id']);
        $('#price').html('$' + parseFloat(price).toFixed(6));
        $('#change').html('(' + (parseFloat(result.data['changePercent24Hr']).toFixed(2)) + '%)');
        $('#rank').html(result.data['rank']);
        $('#cap').html('$' + ((result.data['marketCapUsd'])/1000000000).toFixed(2) + 'B');
        $('#volumetoday').html('$' + ((result.data['volumeUsd24Hr'])/1000000).toFixed(2) + 'M');
        $('#supply').html(((result.data['supply'])/1000000000).toFixed(2) + 'B TRX' );
        $('#usd_price').val((inputvalue * price).toFixed(6));
        $('#price2').html('$' + parseFloat(price).toFixed(6));
        $('#change2').html('(' + (parseFloat(result.data['changePercent24Hr']).toFixed(2)) + '%)');
        $('#rank2').html(result.data['rank']);
        $('#cap2').html('$' + ((result.data['marketCapUsd'])/1000000000).toFixed(2) + 'B');
        $('#volumetoday2').html('$' + ((result.data['volumeUsd24Hr'])/1000000).toFixed(2) + 'M');
        $('#supply2').html(((result.data['supply'])/1000000000).toFixed(2) + 'B TRX' );
    });
  }, 1000);
});
