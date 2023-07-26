function displaynum(n1){
  Calculator.text1.value = Calculator.text1.value + n1;
}

function replace() {
  // Obter o valor atual do campo de texto
  var text1 = document.forms["Calculator"]["text1"].value;

  // Verificar se o campo de texto não está vazio
  if (text1.trim() !== "") {
    // Obter o texto sem a última letra
    var updatedText = text1.slice(0, -1);

    // Atualizar o valor do campo de texto
    document.forms["Calculator"]["text1"].value = updatedText;
  }
}

function percentage(){
  var percentageNum = document.forms["Calculator"]["text1"].value;
  var percentageSymbol = percentageNum / 100;
  document.forms["Calculator"]["text1"].value = percentageSymbol;
}

function fatorial() {
  var fatorialNum = parseInt(document.forms["Calculator"]["text1"].value);

  if (fatorialNum === 0) {
    document.forms["Calculator"]["text1"].value = 1;
  } else {
    let fatorial = 1;
    for (let i = 1; i <= fatorialNum; i++) {
      fatorial = fatorial * i;
    }
    document.forms["Calculator"]["text1"].value = fatorial;
  }
}








