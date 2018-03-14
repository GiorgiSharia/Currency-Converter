$(document).ready(function(){
    var gbpRate;
    var usdRate;
    var eurMoney;
    const key = "eaa8a79777cf158a2c7682b037defbcb"
    $.ajax({
      url: 'http://data.fixer.io/api/latest?access_key=' + key,
      dataType: 'jsonp',
      success: function(json) {
                gbpRate = json.rates.GBP;
                usdRate = json.rates.USD;
      },
      fail: function(xhr, statusText, body) {
        console.log(body);
      }
    });
    $("#input").change(function(){
        eurMoney = $("#input").val();
        calculate();
    });
    $("#From").change(function(){
        calculate();
    });
    $("#To").change(function(){
        calculate();
    });
    function calculate(){
        if($("#From").val() == "GBP"){
            if($("#To").val() == "USD"){
                $("#result").text("Result : " + eurMoney*usdRate/gbpRate);
            }else if($("#To").val() == "EUR"){
                $("#result").text("Result : " + eurMoney/gbpRate);
            }else{
                $("#result").text("Result : " + eurMoney);
            }
        }else if($("#From").val() == "USD"){
            if($("#To").val() == "GBP"){
                $("#result").text("Result : " + eurMoney/usdRate*gbpRate);
            }else if($("#To").val() == "EUR"){
                $("#result").text("Result : " + eurMoney/usdRate);
            }else{
                $("#result").text("Result : " + eurMoney);
            }
        }else if($("#From").val() == "EUR"){
            if($("#To").val() == "USD"){
                $("#result").text("Result : " + usdRate*eurMoney);
            }else if($("#To").val() == "GBP"){
                $("#result").text("Result : " + gbpRate*eurMoney);
            }else{
                $("#result").text("Result : " + eurMoney);
            }
        }
    }
  });