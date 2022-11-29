function confirm() {
  let valor = 45;
  let pago = prompt("Digite o Valor:");
  let calc = pago - valor;
  let limitvalue = pago.length;

    // Validações Simples
  if (pago < 45) {
    return alert("Valor Insuficiente");
  }

  if (limitvalue > 2) {
    return alert("Valor Muito Alto!");
  }

  if (pago === "") {
    return alert("Digite Um valor!!");
  }
   //Fim das Validações

   if(pago > 44) {
    alert('Compra feita com sucesso')
   }

  alert(`O seu troco foi de ${calc}R$`);
}

function confirmbaldes() {
  let valor = 35;
  let pago = prompt("Digite o Valor:");
  let calc = pago - valor;
  let limitvalue = pago.length;

     // Validações Simples
  if (pago < 35) {
    return alert("Valor Insuficiente");
  }

  if (limitvalue > 2) {
    return alert("Valor Muito Alto!");
  }

  if (pago === "") {
    return alert("Digite Um valor!!");
  }
     // Fim das Validações 

  alert(`O seu troco foi de ${calc}R$`);
}

function confirmcombos() {
  let valor = 60;
  let pago = prompt("Digite o Valor:");
  let calc = pago - valor;
  let limitvalue = pago.length;

     // Validações Simples
  if (pago < 60) {
    return alert("Valor Insuficiente");
  }

  if (limitvalue > 2) {
    return alert("Valor Muito Alto!");
  }

  if (pago === "") {
    return alert("Digite Um valor!!");
  }
     // Fim das Validações  

  alert(`O seu troco foi de ${calc}R$`);
}
