function calcu(){
  var num1 = parseInt(document.querySelector("#number1").value);
  var num2 = parseInt(document.querySelector("#number2").value);
  var op =document.querySelector("#operator").value;
  var calculate;


    if (op == "add"){
      calculate = num1 + num2;
    } else if(op == "min"){
      calculate = num1 - num2;
    } else if (op == "div") {
      calculate = num1 / num2;
    } else if (op == "mul") {
      calculate = num1 * num2;
    } else {
      calculate = "error";
    }
    document.querySelector("#result").innerHTML = calculate;
    }

    function test(){
        var checker  = document.querySelector("#checksum").value;
        var theans;

        if(checker == claculate){

          theans = "the match is correct";

        }else if (checker =! calculate){

          theans = " the match is wrong";

        }else{
          theans = " there is error in code";
        }
          document.querySelector("#checkersum").innerHTML = theans;


    }
